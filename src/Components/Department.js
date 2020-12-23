import React,{Component} from 'react';
import {Table,Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import ModelAddDepartment from './ModelAddDepartment'; 
import ModelUpdateDepartment from './ModelUpdateDepartment';
export default class Department extends Component{

    constructor(props)
    {
        super(props);
        this.state={arrayofObject:[],onModelShow:false,onModelShowUpdate:false};
    }
    componentDidMount() // method will executed after all commponents loaded into the application
    {
        this.loadDynamicData();
    }
    
    loadStaticData(){
          this.setState({ arrayofObject:[{"id":1,"depname":"React"},{"id":2,"depname":"Angular"},{"id":3,"depname":"Web API"}] })  //static way to load data
    }


    loadDynamicData(){
        //http://localhost:62489/api/default/GetDepartmentsList
        fetch('http://localhost/ReactWebAPI/api/default/GetDepartmentsList')  
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
            //http://localhost:62489/api/Default/deleteDepart
            fetch('http://localhost/ReactWebAPI/api/Default/deleteDepart',{ 
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
    deleteDepartment_UsingGET(depid){
        if(window.confirm('Do you want to delete data ?'))
        {
            //'http://localhost:62489/api/Default/deleteDepart/'
            fetch('http://localhost/ReactWebAPI/api/Default/deleteDepart/'+depid,{
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }) 
        } 
        
    }
    render()
    {
        const {depid,depname}= this.state; // for Update Model popup

        const {arrayofObject} =this.state; //table binding properties
        const modelClose=()=>{this.setState({onModelShow:false})} // binding properties
        const modelCloseUpdate=()=>{this.setState({onModelShowUpdate:false})} // binding properties for edit operation
        return(
            <div >
                <div className="bg-success p-5 text-center">
                    <h5 className="text-white">Welcome to my Department page</h5>
                </div>
                <br/>
                <ButtonToolbar> 
                    <Button variant="primary" onClick={()=>this.setState({onModelShow:true})} >Add Department</Button>
                    <ModelAddDepartment show={this.state.onModelShow} onHide={modelClose}/>
                </ButtonToolbar> 

                <Table className="mt-2"  striped bordered hover>
                        <thead>
                            <tr>
                                <th>Department ID</th>
                                <th>Department Name</th>         
                                <th>Function</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {arrayofObject.map(dep=>
                                <tr key={dep.id}>
                                    <td>{dep.id}</td>
                                    <td>{dep.depname}</td>
                                    <td>
                                    <ButtonToolbar> 
                                        <Button variant="info" className="sm-2 mr-2" onClick={()=>this.setState({onModelShowUpdate:true,depid:dep.id,depname:dep.depname})} >Update</Button>
                                        
                                        <Button variant="danger" className="sm-2  mr-2"  onClick={()=>this.deleteDepartment_UsingGET(dep.id)}>Delete GET</Button>
                                        
                                         <Button variant="warning" className="sm-2  mr-2"  onClick={()=>this.deleteDepartment(dep.id)}>Delete POST</Button> 

                                        <ModelUpdateDepartment show={this.state.onModelShowUpdate} onHide={modelCloseUpdate} depid={depid} depname={depname} />
                                        
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