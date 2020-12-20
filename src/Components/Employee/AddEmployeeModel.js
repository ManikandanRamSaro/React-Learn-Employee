 
import React,{Component} from 'react';
import {Row,Col,Model,Button,Form,Modal} from 'react-bootstrap';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';

export default class AddEmployeeModel extends Component{

    constructor(props){
        super(props);

        this.state={snackbarOpen:false,messageDis:'',departList:[],doj:new Date()} // variables declared for Snack bar 
        this.handleSubmit = this.handleSubmit.bind(this);

        this.setSelectedDate = this.setSelectedDate.bind(this);
    }

    closeSnackBar =(event)=>{
        this.setState({snackbarOpen:false})
    }

    componentDidMount()
    {
        fetch('http://localhost:62489/api/default/GetDepartmentsList')
        .then(response=>response.json())
        .then(output=>{
            this.setState({departList:output})
        })
    }
    handleSubmit(event){
        event.preventDefault();
        let depidis=0
        var listof=this.state.departList;
        for(let i=0;i<listof.length;i++)
        {
            if(listof[i].depname===event.target.depid.value)
            {
                depidis=listof[i].id;
            }
        }
         
        fetch('http://localhost:62489/api/Default/addEmployee',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:null,
                name:event.target.name.value,
                address:event.target.address.value,
                mobileNo:event.target.mobileNo.value,
                depid:depidis,//event.target.depid.value,
                role:event.target.role.value,
                dateat:event.target.dateat.value
            })
         })
            .then(res=>res.json())
            .then((result)=>{
                this.setState({snackbarOpen:true,messageDis:'New Employee Added'})
                console.log(result) 
            },
            (error)=>{
                this.setState({snackbarOpen:true,messageDis:'There was an error please open console'})
                console.log(error)
            
        })

    }
    setSelectedDate(date)
    {
        this.setState({doj:date});
    };
    handleDateChange = (date) => {
        console.log(date)
        this.setSelectedDate(date);
    };


    
    render(){
      
        const {arrayofObject} =this.state; //table binding properties
        return(
            <div className="container">
                <SnackBar
                anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                open={this.state.snackbarOpen}
                autoHideDuration={3000}
                onClose={this.closeSnackBar}
                message={<span id="snk-msg-one">{this.state.messageDis}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={this.closeSnackBar}>
                        X
                    </IconButton>
                ]}
                />

            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Employee
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container">
                <Row>
                    <Col sm={12}>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <dic className="col-sm-12 col-md-6">
                            <Form.Group id="name">
                                <Form.Label>Employee Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Name" required/>
                            </Form.Group>
                            </dic>
                            <dic className="col-sm-12 col-md-6">
                           
                            <Form.Group id="depid">
                                <Form.Label>Employee Department</Form.Label>
                                <Form.Control as="select"  name="depid">
                                    {this.state.departList.map(dep =>
                                        <option key={dep.id}>{dep.depname}</option>
                                    )}
                                </Form.Control>
                            </Form.Group>
                            </dic>
                        </div>
                        <div className="row">
                            <dic className="col-sm-12 col-md-6">
                            <Form.Group id="mobileNo">
                                <Form.Label>Employee Mobile</Form.Label>
                                <Form.Control type="text" name="mobileNo" placeholder="Mobile No" required/>
                            </Form.Group>
                            </dic>
                            <dic className="col-sm-12 col-md-6">
                            <Form.Group id="address">
                                <Form.Label>Employee Address</Form.Label>
                                <Form.Control type="text" name="address" placeholder="Address" required/>
                            </Form.Group>
                            </dic>
                        </div>
                        <div className="row">
                            <dic className="col-sm-12 col-md-6">
                            <Form.Group id="role">
                                <Form.Label>Employee Role</Form.Label>
                                <Form.Control type="text" name="role" placeholder="Role" required/>
                            </Form.Group>
                            </dic>
                            <dic className="col-sm-12 col-md-6">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                
                                   
                                    <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date of Join"
                                    format="dd-MM-yyyy"
                                    value={this.state.doj}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />  
                                </MuiPickersUtilsProvider>
                            {/* <Form.Group id="dateat">
                                <Form.Label>Date of Join</Form.Label>
                                <Form.Control type="date" name="dateat" placeholder="Select Date" required/>
                            </Form.Group> */}
                            </dic>
                        </div> 
                          
                          
                          
                           
                           
                            <Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>
                      </Form>
                    </Col>
                </Row>
               
            </div>
             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          </div>
        )
    }
}