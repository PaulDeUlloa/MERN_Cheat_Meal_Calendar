import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar">
      <div class="container text-end">
        <h1 class="navTitle">Cheat Day Calender</h1>
        <div>
          <button id="navBtn" class="btn btn-dark">
            <Link to="/">Calendar</Link>
          </button>{" "}
          <button id="navBtn" class="btn btn-dark">
            <Link to="/meals">Home</Link>
          </button>{" "}
          <button id="navBtn" class="btn btn-dark">
            <Link to="/meals/new">Log New Cheat Meal</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
