import React from 'react'
import { Route, Switch } from 'react-router'
import EmployeeHome from './Component/EmployeeHome'
import EmployeeNavbar from './Component/EmployeeNavbar'
import AddEmployee from './Component/AddEmployee'
import EmployeeUpdate from './Component/EmployeeUpdate'


function App() {
  return (
    <div>
     <EmployeeNavbar />
     <Switch>
       <Route exact path="/" component={EmployeeHome}></Route>
       <Route exact path="/add" component={AddEmployee}></Route>
       <Route exact path="/update/:empId" component={EmployeeUpdate}></Route>
     </Switch>
    </div>
  )
}

export default App
