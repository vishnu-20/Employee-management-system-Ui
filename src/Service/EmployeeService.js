import axios from "axios";
import * as service from './constant'

class EmployeeService {

    getEmployeeDetails(){
     return axios.get(service.FETCH_DATA);
     
    }

}
export default new EmployeeService();