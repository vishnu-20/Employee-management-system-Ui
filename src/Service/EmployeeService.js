import axios from "axios";
import * as service from "./constant";

class EmployeeService {
  getEmployeeDetails() {
    return axios.get(service.FETCH_DATA);
  }
  deletEmployee(empId) {
    return axios.delete(service.FETCH_DELETE + "/" + empId);
  }
  addEmployee(employee) {
    return axios.post(service.FETCH_ADD, employee);
  }

  updateEmployee(empId, name) {
    return axios.put(service.FETCH_UPDATE + "/" + empId + "/" + name);
  }
}
export default new EmployeeService();
