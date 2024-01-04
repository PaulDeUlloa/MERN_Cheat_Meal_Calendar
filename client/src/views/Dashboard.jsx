import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/meals`)
      .then((res) => setMealList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (deletedId) => {
    axios
      .delete(`http://localhost:8000/api/meals/${deletedId}`)
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
  };

  function changeBackground(e) {
    e.target.style.background = "LightCoral";
  }

  function changeBackgroundWhite(e) {
    e.target.style.background = "white";
  }

  function changeBackground2(e) {
    e.target.style.background = "Aquamarine";
  }

  function changeBackgroundWhite2(e) {
    e.target.style.background = "white";
  }

  return (
    <div id="bodySpacing">
      <h3 id="cheatMealCounterTitle">Cheat Meals</h3>
      <table class="table table-hover">
        <thead class="table-light">
          <tr>
            <th id="table-row-naming-color">Meal Name: </th>
            <th id="table-row-naming-color">Actions:</th>
          </tr>
        </thead>
        <tbody>
          {mealList.map((oneMeal, idx) => {
            return (
              <tr key={idx}>
                <td class="table-info" id="mealName">
                  {oneMeal.name}
                </td>
                <td class="table-danger" id="actionsSpacing">
                  <Link to={`/meals/${oneMeal._id}/edit`}>
                    <button
                      id="editDeleteButtonsFont"
                      onMouseEnter={changeBackground2}
                      onMouseLeave={changeBackgroundWhite2}
                      class="btn btn-light"
                    >
                      Edit
                    </button>
                  </Link>
                  <Link>
                    <button
                      id="editDeleteButtonsFont"
                      onMouseEnter={changeBackground}
                      onMouseLeave={changeBackgroundWhite}
                      class="btn btn-light"
                      onClick={() => handleDelete(oneMeal._id)}
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
