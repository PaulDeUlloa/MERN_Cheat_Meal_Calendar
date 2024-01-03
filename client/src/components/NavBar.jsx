import { Link } from "react-router-dom";
import "../index.js";

function changeBackground(e) {
  e.target.style.background = "rgb(0,191,255)";
}

function changeBackgroundBlack(e) {
  e.target.style.background = "white";
}

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
          <button
            onMouseEnter={changeBackground}
            onMouseLeave={changeBackgroundBlack}
            class="btn btn-light"
          >
            <Link id="navBtn" to="/">
              Calendar
            </Link>
          </button>{" "}
          <button
            onMouseEnter={changeBackground}
            onMouseLeave={changeBackgroundBlack}
            class="btn btn-light"
          >
            <Link id="navBtn" to="/meals">
              Home
            </Link>
          </button>{" "}
          <button
            onMouseEnter={changeBackground}
            onMouseLeave={changeBackgroundBlack}
            class="btn btn-light"
          >
            <Link id="navBtn" to="/meals/new">
              Add Cheat Meal
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
