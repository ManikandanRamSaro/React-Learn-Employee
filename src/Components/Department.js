import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
export default class Department extends Component{

    constructor(props)
    {
        super(props);
        this.state={arrayofObject:[]};
    }
    componentDidMount() // method will executed after all commponents loaded into the application
    {
        this.loadStaticData();
    }

    loadStaticData(){
        this.setState({
            arrayofObject:[{"depid":1,"depName":"React"},{"depid":2,"depName":"Angular"},{"depid":3,"depName":"Web API"}]
        })
    }
    render()
    {
        const {arrayofObject} =this.state;
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
                                <tr key="dep.depid">
                                    <td>{dep.depid}</td>
                                    <td>{dep.depName}</td>
                                </tr>
                            )}

                        </tbody>
                </Table>
            </div>
        );
    }
}