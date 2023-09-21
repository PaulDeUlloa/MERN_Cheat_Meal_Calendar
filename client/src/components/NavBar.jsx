import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav class="navbar bg-success">
            <div class="container text-end">
            <h1>Cheat Day Calender</h1>
                <div>
                    <Link to="/meals">Home</Link> | {" "}
                    <Link to="/meals/new">Log New Cheat Meal</Link>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;