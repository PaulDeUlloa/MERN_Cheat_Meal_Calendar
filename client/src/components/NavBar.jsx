import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav class="navbar bg-success">
            <div class="container text-end">
            <h1>Cheat Day Calender</h1>
                <div>
                    <button class="btn btn-primary">
                        <Link to="/meals">Home</Link>
                    </button>
                    {" "}
                    <button class="btn btn-primary">
                        <Link to="/meals/new">Log New Cheat Meal</Link>
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;