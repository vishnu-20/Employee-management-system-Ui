import {Component} from 'react'
import EmployeeService from '../Service/EmployeeService';
import EmployeeHome from './EmployeeHome'

class AddEmployee extends Component {
constructor(props ) {
    super(props);

    this.state={
        form :{
        firstName: "",
        lastName: "",
        salary:0,
        age: 0,
        designation: "",
        password: "",
        phone: ""
        },
        formValidity:{
            firstName: false,
             lastName: false,
               salary: false,
                  age: false,
          designation: false,
                phone: false 
     
       },
       formError:{
        firstName: "",
         lastName: "",
           salary: "",
              age: "",
      designation: "",
            phone: ""
    },
    successMessage:"",
    errorMessgae:"" 


}


}


onChangeHandle=(e)=>{
    const feildName=e.target.name;
    const value=e.target.value;
    const formObj=this.state.form;
    const salary="salary";
    if(feildName==="designation"){
        switch (value) {
            case "Operations Executive":
               formObj[salary]=18000;  
                break;
            case "Technologu Analyst":
               formObj[salary]=18000;  
                break;
            case "Technology Lead":
               formObj[salary]=18000;  
                break;
            case "Systems Engineer":
               formObj[salary]=18000;  
                break;
        
            default:
                break;
        }
    }
    formObj[feildName]=value;
    this.setState({form:formObj})
    console.log(this.state.form);

}

createEmployee=(e)=>{
    e.preventDefault();
    console.log("-----add function start--------");
    EmployeeService.addEmployee(this.state.form)
    .then(response=>{
       this.setState({successMessage:response.data})
    })
    .catch(error=>{
      console.log(error);
    })

}

    render() {
        if(this.submitted===true){
            return (
                <EmployeeHome value={this.state.successMessage} />
            )
        }
        return (
            <div className="add_employee_home d-flex justify-content-center"> 
            <div className="container_add">
                <h2 className="text-center">Add Employee</h2>
             <form onSubmit={this.createEmployee}>
                <div className='form-group'>
                    <label>First name :</label>
                    <input className="form-control" placeholder="Vishnu" name="firstName" onChange={this.onChangeHandle}></input>
    
                </div>
                <div className='form-group'>
                    <label>Last Name:</label>
                    <input className="form-control" placeholder="Lal" name="lastName" onChange={this.onChangeHandle}></input>
    
                </div>
                <div className='form-group'>
                    <label>Designation</label>
                   <select className="form-control" onChange={this.onChangeHandle} name="designation">
                   <option value=""  >---select---</option>
                       <option value="Operations Executive">Operations Executive</option>
                       <option value="Systems Engineer">Systems Engineer</option>
                       <option value="Technology Lead">Technology Lead</option>
                       <option value="Technologu Analyst">Technologu Analyst</option>
                   </select>
    
                </div>
                {/* <div className='form-group'>
                    <label>Salary:</label>
                    <input className="form-control" disabled defaultValue={this.state.form.salary} name="salary" ></input>
    
                </div> */}
                <div className='form-group'>
                    <label>Age:</label>
                    <input className="form-control" placeholder="22" name="age" onChange={this.onChangeHandle}></input>
    
                </div>
                {/* <div className='form-group'>
                    <label>Password :</label>
                    <input type="password" className="form-control" placeholder="password" name="password"></input>
    
                </div> */}
                <div className='form-group'>
                    <label>Phone:</label>
                    <input type="number" className="form-control" placeholder="9207450908" name="phone" onChange={this.onChangeHandle}></input>
    
                </div>
                    <div className="add_class_buttons">
                     <button className="btn btn-primary" >Add</button>
                     <button className="btn btn-danger" style={{marginLeft:"5px"}} type="reset">Reset</button> 
                    </div>
                 </form>  
                 <div className="text-success text-center sucess_message">
                     {this.state.successMessage}
                 </div>
            </div>
            </div>
        );
    }
}

export default AddEmployee;