import React from "react";

const EmployeeDetail = ({ employees, id }) => {
  console.log(id);

  return (
    <div>
      {employees
        .filter((employee) => employee.id === id)
        .map((emp) => (
          <div>{emp.email}</div>
        ))}
    </div>
  );
};

export default EmployeeDetail;
