import React from "react";
import { useState, useEffect } from "react";
import EmployeeService from "../Service/EmployeeService";
import "../App.css";

function EmployeeHome() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployeeDetails().then((response) => {
      setEmployee(response.data);
    });
  }, []);
  return (
    <div className="employee_home">
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">DOJ</th>
              <th scope="col">Salary</th>
              <th scope="col">Age</th>
              <th scope="col">Designation</th>
              <th scope="col">Phone</th>
            </tr>
            </thead>
            <tbody>
                {
                    employee.map((emp)=><tr key={emp.employeeId}>
                        <td>{emp.employeeId}</td>
                        <td>{emp.firstName+" "+emp.lastName}</td>
                        <td>{emp.dateOfJoining}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.age}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.phone}</td>
                        <td><button className="btn btn-danger">delete</button></td>
                        <td><button className="btn btn-warning">Update</button></td>
                    </tr>)
                }
            </tbody>
        
        </table>
      </div>
    </div>
  );
}

export default EmployeeHome;
