import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header.js";
import HomePage from "./pages/HomePage.js";
import Employees from "./pages/Employees.js";
import Inventory from "./pages/Inventory.js";
 
function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Routes>
        <Route exact path={"/"} element = {<HomePage />} />
        <Route exact path={"/employees"} element = {<Employees />} />
        <Route exact path={"/inventory"} element = {<Inventory />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
