import React,{Component} from 'react';
import {Table,Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import ModelAddDepartment from './ModelAddDepartment'; 
export default class Department extends Component{

    constructor(props)
    {
        super(props);
        this.state={arrayofObject:[],onModelShow:false};
    }
    componentDidMount() // method will executed after all commponents loaded into the application
    {
        this.loadStaticData();
    }

    loadStaticData(){
        fetch('http://localhost:62489/api/default/GetDepartmentsList')
        .then(response=>response.json())
        .then(output=>{
            this.setState({arrayofObject:output})
        })
      //   this.setState({ arrayofObject:[{"id":1,"depname":"React"},{"id":2,"depname":"Angular"},{"id":3,"depname":"Web API"}] })  //static way to load data
    }
    render()
    {
        const {arrayofObject} =this.state; //table binding properties
        const modelClose=()=>{this.setState({onModelShow:false})} // binding properties
        return(
            <div >
                <div className="bg-success p-5 text-center">
                    <h5 className="text-white">Welcome to my Department page</h5>
                </div>
                <Table className="mt-5" stripped size="sm" hover bordered>
                        <thead>
                            <tr>
                                <th>Department ID</th>
                                <th>Department Name</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {arrayofObject.map(dep=>
                                <tr key="dep.id">
                                    <td>{dep.id}</td>
                                    <td>{dep.depname}</td>
                                </tr>
                            )}

                        </tbody>
                </Table>
                <ButtonToolbar> 
                    <Button variant="primary" onClick={()=>this.setState({onModelShow:true})} >Add Department</Button>
                    <ModelAddDepartment show={this.state.onModelShow} onHide={modelClose}/>
                    </ButtonToolbar> 
            </div>
        );
    }
}