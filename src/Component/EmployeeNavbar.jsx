import React from "react";
import { Link, Redirect } from "react-router-dom";

function EmployeeNavbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/add">Add</Link>
          </li>
          <Redirect to="/"></Redirect>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default EmployeeNavbar;
