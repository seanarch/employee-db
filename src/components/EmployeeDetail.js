import React from "react";

const EmployeeDetail = ({ employees, id }) => {
  return (
    <div>
      {employees
        .filter((employee) => employee.id === id)
        .map((emp) => (
          <div key={emp.id}>{emp.email}</div>
        ))}
    </div>
  );
};

export default EmployeeDetail;
