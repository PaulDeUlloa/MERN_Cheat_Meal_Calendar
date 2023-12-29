import { Link } from "react-router-dom";
import "../index.js";

const NavBar = () => {
  return (
    <nav class="navbar">
      <div class="container text-end">
        <h1 class="navTitle">
          <Link id="navBtn" to="/">
            Cheat Day Calender
          </Link>
        </h1>
        <div>
          <button class="btn btn-dark">
            <Link id="navBtn" to="/">
              Calendar
            </Link>
          </button>{" "}
          <button class="btn btn-dark">
            <Link id="navBtn" to="/meals">
              Home
            </Link>
          </button>{" "}
          <button class="btn btn-dark">
            <Link id="navBtn" to="/meals/new">
              Log New Cheat Meal
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
