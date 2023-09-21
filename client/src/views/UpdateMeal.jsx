import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, } from "react-router-dom"
import { Link } from "react-router-dom";



const UpdateMeal = () => {
    const[name, setName] = useState("");
    const[date, setDate] = useState("");

    const { id } = useParams();

    const [errors, setErrors] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/meals/${id}`)
        .then((res) =>{
            const oneMeal = res.data;
            setName(oneMeal.name);
        })
        .catch((err) => console.log(err));
        
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios
        .put(`http://localhost:8000/api/meals/${id}`, {name})
        .then(() => navigate("/meals"))
        .catch((err)=>{
            const errResponse = err.response.data.errors;
            const errArr = [];
            for(const key in errResponse){
                errArr.push(errResponse[key].message)
            }
            setErrors(errArr);
        });
    };



    return <div>
        <h2>Edit this meal:</h2>
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <br></br>
                <input 
                type="text" 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                />
                <label>Select Date: </label>
                <br></br>
                <input 
                type="date"
                value={date} 
                onChange={(e)=>setDate(e.target.value)}
                />
                <div>
                    <Link to="/meals">
                        <button>Cancel</button>
                    </Link>
                    {" "}
                    <input type="submit" value="Submit" />
                </div>
            </div>
        </form>
        {errors.map((err, idx) =>{
            return <p key={idx}>{err}</p>;
        })}
    </div>
};

export default UpdateMeal;