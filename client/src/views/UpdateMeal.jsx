import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateMeal = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/meals/${id}`)
      .then((res) => {
        const oneMeal = res.data;
        setName(oneMeal.name);
        setDate(oneMeal.date);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/meals/${id}`, { name })
      .then(() => navigate("/meals"))
      .catch((err) => {
        const errResponse = err.response.data.errors;
        const errArr = [];
        for (const key in errResponse) {
          errArr.push(errResponse[key].message);
        }
        setErrors(errArr);
      });
  };

  return (
    <div id="bodySpacing">
      <h2 id="editMealTitle">Edit meal:</h2>
      <form class="form-control" onSubmit={submitHandler}>
        <div class="row mb-3 mt-3">
          <label class="col-sm-2 col-form-label">Name: </label>
          <div class="col-sm-8">
            <input
              placeholder="Meal name"
              class="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div class="row mb-3 mt-3">
          <label class="col-sm-2 col-form-label">Select Date: </label>
          <div class="col-sm-8">
            <input
              class="form-control"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 mt-4">
          <Link to="/meals">
            <button class="btn btn-light">Cancel</button>
          </Link>{" "}
          <input class="btn btn-light" type="submit" value="Submit" />
        </div>
      </form>
      {errors.map((err, idx) => {
        return <p key={idx}>{err}</p>;
      })}
      <footer id="footerCopyright">
        <p id="copyrightParagraphColor">
          Copyright &copy;2023 Cheat Day Calender; Designed by,
          <span id="copyrightSpan">
            <a id="copyrightAnchor" href="https://github.com/PaulDeUlloa">
              p. de ulloa
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default UpdateMeal;
