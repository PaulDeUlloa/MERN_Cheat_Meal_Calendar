import React,{useState, useEffect} from "react";
import axios from"axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [mealList, setMealList] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/meals`)
        .then((res) => setMealList(res.data))
        .catch((err) => console.log(err));
        
    }, []);

    const handleDelete = (deletedId) =>{
        axios.delete(`http://localhost:8000/api/meals/${deletedId}`)
        .then(() => {
            removeFromDom(deletedId);
        })
        .catch((err) => console.log(err));
    };
    //* updates dom without refresh
    const removeFromDom = (deletedId) => {
        const filteredList = mealList.filter(
            (eachMeal, idx) => eachMeal._id !== deletedId
        );
        setMealList(filteredList);
    }

    return (
        <div>
            <h2>Cheat Meal Counter:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Meal Name: </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mealList.map((oneMeal, idx) => {
                    return(
                        <tr key={idx}>
                            <td>{oneMeal.name}</td>
                            <td>
                                <Link to={`/meals/${oneMeal._id}/edit`}>
                                    <button>Edit</button></Link>
                                <Link>
                                    <button onClick={()=>handleDelete(oneMeal._id)}>Delete</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
};

export default Dashboard;