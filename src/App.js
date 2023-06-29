import { Modal } from "react-bootstrap";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="title">Employee Database Management</div>
          </div>
          <div className="col-5">
            <AddEmployee />
            <EmployeeForm />
          </div>
        </div>
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;
