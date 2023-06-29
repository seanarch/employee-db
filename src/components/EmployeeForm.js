import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EmployeeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Add a new Employee
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-2">
                <input type="text" className="col-6" placeholder="First name" />
                <input type="text" className="col-6" placeholder="Last name" />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="col-12"
                  placeholder="Image URL (Optional)"
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="col-12"
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>
              <div className="mb-2">
                <input type="text" className="col-12" placeholder="Contact" />
              </div>
              <div className="mb-2">
                <input type="text" className="col-12" placeholder="Salary" />
              </div>
              <div className="mb-2">
                <input type="text" className="col-12" placeholder="Address" />
              </div>
              <DatePicker
                className="col-12"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
