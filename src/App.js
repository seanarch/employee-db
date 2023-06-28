import "./App.css";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="title">Employee Database Management</div>
          </div>
        </div>
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;
