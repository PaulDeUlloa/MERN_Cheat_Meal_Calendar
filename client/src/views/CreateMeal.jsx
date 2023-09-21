import axios from "axios";
import React, { useState } from "react";
import { useNavigate, } from "react-router-dom"
import { Link } from "react-router-dom";



const CreateMeal = () => {
    const[name, setName] = useState("");
    const[date, setDate] = useState("");

    const [errors, setErrors] = useState([])

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/api/meals`, {name})
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
        <h2>Add a new meal:</h2>
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input 
                type="text" 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                />
                <br />
                <label>Select Date: </label>
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

export default CreateMeal;