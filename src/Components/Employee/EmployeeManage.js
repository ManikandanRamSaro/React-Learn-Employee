import React,{Component} from 'react';
import {Table,Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap'; 
import AddEmployeeModel from './AddEmployeeModel';

import {NavLink} from 'react-router-dom';
export default class EmployeeManage extends Component{

    constructor(props)
    {
        super(props);
        this.state={arrayofObject:[],onModelShow:false,onModelShowUpdate:false};
    }
    componentDidMount()  
    {
        this.loadDynamicData();
    }
    
    loadStaticData(){
          this.setState({ arrayofObject:[{"id":"1","name":"Shree","address":"","mobileNo":"","depid":"","role":"","dateat":""},{"id":"2","name":"Sai","address":"","mobileNo":"","depid":"","role":"","dateat":""}] })  //static way to load data
    }


    loadDynamicData(){
        fetch('http://localhost:62489/api/default/GetEmplpoyeesList')
        .then(response=>response.json())
        .then(output=>{
            this.setState({arrayofObject:output})
        })
    }

    componentDidUpdate()  // based on change event this will automatically load data
    {
        this.loadDynamicData();   
    }
    deleteDepartment(depid){
        if(window.confirm('Do you want to delete data ?'))
        {
            fetch('http://localhost:62489/api/Default/deleteDepart',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    id:depid,
                    depname:null
                })
             })
                .then(res=>res.json())
                .then((result)=>{ 
                    console.log(result) 
                },
                (error)=>{ 
                    console.log(error)
                
            })
        }
       // event.preventDefault();
        
    }
    
    render()
    {
        const {depid,depname}= this.state; // for Update Model popup

        const {arrayofObject} =this.state; //table binding properties
        const modelClose=()=>{this.setState({onModelShow:false})} // binding properties
        const modelCloseUpdate=()=>{this.setState({onModelShowUpdate:false})} // binding properties for edit operation
        return(
            <div >
                
                <br/>
                <ButtonToolbar> 
                    <Button variant="primary" onClick={()=>this.setState({onModelShow:true})} >Add Employee</Button>
                    <AddEmployeeModel show={this.state.onModelShow} onHide={modelClose}/>
                    <NavLink className="btn-info sm-2 p-2" to="/Datatable">Employees List</NavLink>
                </ButtonToolbar> 
                
               
                <Table className="mt-2"  striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>         
                                <th>Address</th>         
                                <th>Mobile</th>         
                                <th>Department</th>   
                                <th>Role</th>         
                                <th>Date</th>         
                                <th>Function</th>                                
                            </tr>
                        </thead>
                        <tbody> 
                            {arrayofObject.map(emp=>
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.address}</td>
                                    <td>{emp.mobileNo}</td>
                                    <td>{emp.depid}</td>
                                    <td>{emp.role}</td>
                                    <td>{emp.dateat}</td>
                                    <td>
                                    <ButtonToolbar> 
                                        <Button variant="info" className="sm-2 mr-2" onClick={()=>this.setState({onModelShowUpdate:true,depid:emp.id,depname:emp.name})} >Update</Button>
                                        
                                        <Button variant="danger" className="sm-2  mr-2"  onClick={()=>this.deleteDepartment_UsingGET(emp.id)}>Delete</Button>
                                     
                                    </ButtonToolbar> 
                                    </td>
                                </tr>
                            )}

                        </tbody>
                </Table>
             
            </div>
        );
    }
}