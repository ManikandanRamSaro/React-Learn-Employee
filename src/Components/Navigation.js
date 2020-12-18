import { Component } from "react"

import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
export default class Navigation extends Component
{
    render(){
        return (
            <div>
               <Navbar bg="dark" expand="lg">
                   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                   <Navbar.Collapse id="basic-navbar-nav" >
                       <Nav>
                        
                            <NavLink className="d-flex p-2 bg-dark text-white" to="/">Home</NavLink>

                            <NavLink className="d-flex p-2 bg-dark text-white" to="/Department">Department</NavLink>

                            <NavLink className="d-flex p-2 bg-dark text-white" to="/EmployeeManage">Employee</NavLink>
                            
                       </Nav>
                  </Navbar.Collapse>
                </Navbar> 
            </div>
        )
    }
}