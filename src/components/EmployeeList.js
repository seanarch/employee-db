import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import EmployeeDetail from "./EmployeeDetail";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1001,
      imageUrl: "https://hub.dummyapis.com/Image?text=MR&height=120&width=120",
      firstName: "Madelyn",
      lastName: "Runte",
      email: "Madelyn.Runte@dummyapis.com",
      contactNumber: "4843894156",
      age: 44,
      dob: "04/04/1979",
      salary: 1.0,
      address: "Address1",
    },
    {
      id: 1002,
      imageUrl: "https://hub.dummyapis.com/Image?text=HK&height=120&width=120",
      firstName: "Haven",
      lastName: "Keeling",
      email: "Haven.Keeling@dummyapis.com",
      contactNumber: "4879293586",
      age: 54,
      dob: "13/03/1969",
      salary: 2.0,
      address: "Address2",
    },
    {
      id: 1003,
      imageUrl: "https://hub.dummyapis.com/Image?text=AG&height=120&width=120",
      firstName: "Alejandrin",
      lastName: "Gottlieb",
      email: "Alejandrin.Gottlieb@dummyapis.com",
      contactNumber: "4265193185",
      age: 75,
      dob: "02/12/1948",
      salary: 3.0,
      address: "Address3",
    },
    {
      id: 1004,
      imageUrl: "https://hub.dummyapis.com/Image?text=VJ&height=120&width=120",
      firstName: "Vivian",
      lastName: "Jaskolski",
      email: "Vivian.Jaskolski@dummyapis.com",
      contactNumber: "4567890425",
      age: 37,
      dob: "08/01/1986",
      salary: 4.0,
      address: "Address4",
    },
    {
      id: 1005,
      imageUrl: "https://hub.dummyapis.com/Image?text=SG&height=120&width=120",
      firstName: "Shanel",
      lastName: "Gutkowski",
      email: "Shanel.Gutkowski@dummyapis.com",
      contactNumber: "4832296769",
      age: 28,
      dob: "11/03/1995",
      salary: 5.0,
      address: "Address5",
    },
    {
      id: 1006,
      imageUrl: "https://hub.dummyapis.com/Image?text=IL&height=120&width=120",
      firstName: "Iris",
      lastName: "Labadie",
      email: "Iris.Labadie@dummyapis.com",
      contactNumber: "4324897326",
      age: 32,
      dob: "24/06/1991",
      salary: 6.0,
      address: "Address6",
    },
    {
      id: 1007,
      imageUrl: "https://hub.dummyapis.com/Image?text=AS&height=120&width=120",
      firstName: "Alicia",
      lastName: "Shields",
      email: "Alicia.Shields@dummyapis.com",
      contactNumber: "4901296825",
      age: 42,
      dob: "28/07/1981",
      salary: 7.0,
      address: "Address7",
    },
    {
      id: 1008,
      imageUrl: "https://hub.dummyapis.com/Image?text=AJ&height=120&width=120",
      firstName: "Arno",
      lastName: "Johns",
      email: "Arno.Johns@dummyapis.com",
      contactNumber: "4288794519",
      age: 57,
      dob: "05/06/1966",
      salary: 8.0,
      address: "Address8",
    },
    {
      id: 1009,
      imageUrl: "https://hub.dummyapis.com/Image?text=NG&height=120&width=120",
      firstName: "Nicholas",
      lastName: "Gottlieb",
      email: "Nicholas.Gottlieb@dummyapis.com",
      contactNumber: "4732494046",
      age: 56,
      dob: "13/08/1967",
      salary: 9.0,
      address: "Address9",
    },
    {
      id: 1010,
      imageUrl: "https://hub.dummyapis.com/Image?text=JJ&height=120&width=120",
      firstName: "Judge",
      lastName: "Jaskolski",
      email: "Judge.Jaskolski@dummyapis.com",
      contactNumber: "4723797257",
      age: 39,
      dob: "12/04/1984",
      salary: 10.0,
      address: "Address10",
    },
  ]);

  const [employeeID, setEmployeeID] = useState("");
  {
    console.log(employeeID);
  }
  return (
    <div>
      <div className="row">
        <div className="col">Empolyee List</div>
        <div className="col">Employee Information</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            {employees.map((employee) => {
              return (
                <div key={employee.id} className="row">
                  <div className="col">
                    <div
                      onClick={() => {
                        setEmployeeID(`${employee.id}`);
                      }}
                    >
                      {employee.firstName} {employee.lastName}{" "}
                    </div>
                  </div>
                  <div className="col">
                    <GrClose
                      onClick={() => {
                        console.log("Close", `${employee.id}`);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-7">
            {employeeID && (
              <EmployeeDetail employees={employees} id={employeeID} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
