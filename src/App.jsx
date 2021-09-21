import React from 'react'
import { Route, Switch } from 'react-router'
import EmployeeHome from './Component/EmployeeHome'
import EmployeeNavbar from './Component/EmployeeNavbar'
import AddEmployee from './Component/AddEmployee'


function App() {
  return (
    <div>
     <EmployeeNavbar />
     <Switch>
       <Route exact path="/" component={EmployeeHome}></Route>
       <Route exact path="/add" component={AddEmployee}></Route>
     </Switch>
    </div>
  )
}

export default App
