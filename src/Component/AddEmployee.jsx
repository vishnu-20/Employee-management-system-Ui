import { Component } from "react";
import EmployeeService from "../Service/EmployeeService";
import EmployeeHome from "./EmployeeHome";

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        firstName: "",
        lastName: "",
        salary: 0,
        age: 0,
        designation: "",
        password: "",
        phone: "",
      },
      formValidity: {
        firstName: false,
        lastName: false,
        age: false,
        designation: false,
        phone: false,
        buttonActive: false,
      },
      formError: {
        firstName: "",
        lastName: "",
        age: "",
        designation: "",
        phone: "",
      },
      successMessage: "",
      errorMessgae: "",
    };
    this.submitted=false;
  }

  onChangeHandle = (e) => {
    const feildName = e.target.name;
    const value = e.target.value;
    const formObj = this.state.form;
    const salary = "salary";
    if (feildName === "designation") {
      switch (value) {
        case "Operations Executive":
          formObj[salary] = 18000;
          break;
        case "Technologu Analyst":
          formObj[salary] = 18000;
          break;
        case "Technology Lead":
          formObj[salary] = 18000;
          break;
        case "Systems Engineer":
          formObj[salary] = 18000;
          break;

        default:
          break;
      }
    }
    formObj[feildName] = value;
    this.setState({ form: formObj });
    this.validate(feildName, value);
  };

  validate(feildName, value) {
    const validateObj = this.state.formError;
    var errorMessage = "";
    switch (feildName) {
      case "firstName":
        value.length !== 0
          ? (errorMessage = "")
          : (errorMessage = "Feild Required");
        break;
      case "lastName":
        value.length !== 0
          ? (errorMessage = "")
          : (errorMessage = "Feild Required");
        break;

      case "designation":
        value.length !== 0
          ? (errorMessage = "")
          : (errorMessage = "Feild Required");
        break;

      case "age":
        value.length !== 0
          ? (errorMessage = "")
          : (errorMessage = "Feild Required");
        break;

      case "phone":
        const regex = new RegExp(/^[7-9]{1}[0-9]{9}$/);
        let errorPhone = "";
        if (value.length === 0) {
          errorPhone = "Feild Required";
        } else if (!regex.test(value)) {
          errorPhone = "Please enter a valid number";
        } else {
          errorPhone = "";
        }
        errorMessage = errorPhone;
        break;
      default:
        break;
    }
    validateObj[feildName] = errorMessage;
    this.setState({ formError: validateObj });
    let status = false;
    if (errorMessage === "") {
      status = true;
    }

    const formVlidityObj = this.state.formValidity;
    formVlidityObj[feildName] = status;
    formVlidityObj.buttonActive =
      formVlidityObj.age &&
      formVlidityObj.designation &&
      formVlidityObj.firstName &&
      formVlidityObj.lastName &&
      formVlidityObj.phone;

      this.setState({formValidity:formVlidityObj})
  }

  createEmployee = (e) => {
    e.preventDefault();
    console.log("-----add function start--------");
    EmployeeService.addEmployee(this.state.form)
      .then((response) => {
        this.setState({ successMessage: response.data });
       
      })
      .catch((error) => {
        console.log(error.message.code);
      });
      this.submitted=true;
  };

  render() {
    if (this.submitted === true) {
      return <EmployeeHome value={this.state.successMessage} />;
    }
    return (
      <div className="add_employee_home d-flex justify-content-center">
        <div className="container_add">
          <h2 className="text-center">Add Employee</h2>
          <form onSubmit={this.createEmployee}>
            <div className="form-group">
              <label>First name :</label>
              <input
                className="form-control"
                placeholder="Vishnu"
                name="firstName"
                onChange={this.onChangeHandle}
              ></input>
              <div className="text-danger">
                {this.state.formError.firstName}
              </div>
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                className="form-control"
                placeholder="Lal"
                name="lastName"
                onChange={this.onChangeHandle}
              ></input>
              <div className="text-danger">{this.state.formError.lastName}</div>
            </div>
            <div className="form-group">
              <label>Designation</label>
              <select
                className="form-control"
                onChange={this.onChangeHandle}
                name="designation"
              >
                <option value="">---select---</option>
                <option value="Operations Executive">
                  Operations Executive
                </option>
                <option value="Systems Engineer">Systems Engineer</option>
                <option value="Technology Lead">Technology Lead</option>
                <option value="Technologu Analyst">Technologu Analyst</option>
              </select>
              <div className="text-danger">
                {this.state.formError.designation}
              </div>
            </div>
            {/* <div className='form-group'>
                    <label>Salary:</label>
                    <input className="form-control" disabled defaultValue={this.state.form.salary} name="salary" ></input>
    
                </div> */}
            <div className="form-group">
              <label>Age:</label>
              <input
                className="form-control"
                placeholder="22"
                name="age"
                onChange={this.onChangeHandle}
              ></input>
              <div className="text-danger">{this.state.formError.age}</div>
            </div>
            {/* <div className='form-group'>
                    <label>Password :</label>
                    <input type="password" className="form-control" placeholder="password" name="password"></input>
    
                </div> */}
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="number"
                className="form-control"
                placeholder="9207450908"
                name="phone"
                onChange={this.onChangeHandle}
              ></input>
              <div className="text-danger">{this.state.formError.phone}</div>
            </div>
            <div className="add_class_buttons">
              <button
                className="btn btn-primary"
                disabled={!this.state.formValidity.buttonActive}
              >
                Add
              </button>
              <button
                className="btn btn-danger"
                style={{ marginLeft: "5px" }}
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
         
        </div>
      </div>
    );
  }
}

export default AddEmployee;
