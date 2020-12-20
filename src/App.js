import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Home from './Components/Home';
import Department from './Components/Department';
import Employee from './Components/Employee';
import EmployeeManage from './Components/Employee/EmployeeManage';
import EmployeesListDatatable from './Components/Employee/EmployeesListDatatable';
import Navigation from './Components/Navigation';
import LearningSite from './Components/LearningSite';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Navigation/>
   
    <div className="container">
        <h2 className="text-center">Layout Rendering using React JS </h2>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Department" component={Department}  />
            <Route path="/Employee" component={Employee}/>
            <Route path="/EmployeeManage" component={EmployeeManage}/>
            <Route path="/Datatable" component={EmployeesListDatatable}/>
            <Route path="/learn" component={LearningSite}/>
            <Route path="/nav" component={Navigation}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
