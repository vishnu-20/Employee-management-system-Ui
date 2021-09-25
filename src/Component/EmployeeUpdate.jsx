import {React,useState} from 'react'
import EmployeeService from '../Service/EmployeeService';



function EmployeeUpdate(props) {

  const [firstName, setFirstName] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  console.log(props.match.params.empId);

  const handleChane=(e)=>{
    setFirstName(e.target.value);
    console.log(firstName);
  }
  const updateName=(e)=>{
      e.preventDefault();
    EmployeeService.updateEmployee(props.match.params.empId,firstName)
    .then(response=>{
     setSucessMessage(response.data);
    })
   
  }


    return (
        <div className="add_employee_home d-flex justify-content-center"> 
            <div className="container_add">
                <h2 className="text-center">Update First Name </h2>
             <form onSubmit={updateName}>
                <div className='form-group'>
                    <label>First name :</label>
                    <input className="form-control" placeholder="Vishnu" name="firstName" onChange={handleChane}></input>
                </div>
                
                    <div className="add_class_buttons">
                     <button className="btn btn-primary" >Add</button>
                     <button className="btn btn-danger" style={{marginLeft:"5px"}} type="reset">Reset</button> 
                    </div>
                 </form>  
                 <div className="text-success text-center sucess_message">
                    {sucessMessage}
                 </div>
            </div>
            </div>
    )
}

export default EmployeeUpdate
