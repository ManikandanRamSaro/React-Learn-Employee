import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Home from './Components/Home';
import Department from './Components/Department';
import Employee from './Components/Employee';
import LearningSite from './Components/LearningSite';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        
    <nav className="navbar navbar-expand-sm bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Department">Department</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Employee">Employee</a>
        </li>
      </ul>
    </nav>
    <div className="container">
        <h2 className="text-center">Layout Rendering using React JS </h2>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Department" component={Department}  />
            <Route path="/Employee" component={Employee}/>
            <Route path="/learn" component={LearningSite}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
