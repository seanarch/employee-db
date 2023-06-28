import React from "react";

const EmployeeDetail = ({ employees, id }) => {
  return (
    <div>
      {employees
        .filter((employee) => employee.id === id)
        .map((emp) => (
          <div key={emp.id}>
            <img src={emp.imageUrl} alt="" />
            <div>
              {emp.firstName} {emp.lastName} ({emp.age})
            </div>
            <div>{emp.address}</div>
            <div>{emp.email}</div>
            <div>Mobile - {emp.contactNumber}</div>
            <div>DOB - {emp.dob}</div>
          </div>
        ))}
    </div>
  );
};

export default EmployeeDetail;
