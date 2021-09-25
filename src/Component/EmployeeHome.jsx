import React from "react";
import { useState, useEffect } from "react";
import EmployeeService from "../Service/EmployeeService";
import "../App.css";


function EmployeeHome(props) {
  const [employee, setEmployee] = useState([]);
  const [message, setMessage] = useState("");


   const deleteEmployee=(empId)=>{
       EmployeeService.deletEmployee(empId).then((response)=>{
           setMessage(response.data);
          setEmployee(employee.filter(emp=>emp.employeeId!==empId))
       })
   }
   const updateEmployee=(empId)=>{
   props.history.push(`/update/${empId}`)
}

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
              <th scope="col">Actions</th>
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
                        <td ><button className="btn btn-danger" onClick={()=>{deleteEmployee(emp.employeeId)}}>delete</button>
                        <button className="btn btn-warning" style={{marginLeft:"5px"}} onClick={()=>{updateEmployee(emp.employeeId)}}>Update</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
        <div className="text-center text-success">
        {message}
        </div> 
      </div>
    </div>
  );
}

export default EmployeeHome;
