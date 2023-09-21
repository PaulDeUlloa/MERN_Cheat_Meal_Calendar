import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./views/Dashboard";
import CreateMeal from "./views/CreateMeal";
import UpdateMeal from "./views/UpdateMeal";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
    <Routes>
      <Route path="/meals" element={<Dashboard />} />
      <Route path="/meals/new" element={<CreateMeal />} />
      <Route path="/meals/:id/edit" element={<UpdateMeal />} />
    </Routes>
    </div>
  );
}

export default App;
