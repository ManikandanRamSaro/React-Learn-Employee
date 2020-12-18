 
import React,{Component} from 'react';
import {Row,Col,Model,Button,Form,Modal} from 'react-bootstrap';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export default class AddEmployeeModel extends Component{

    constructor(props){
        super(props);

        this.state={snackbarOpen:false,messageDis:''} // variables declared for Snack bar 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    closeSnackBar =(event)=>{
        this.setState({snackbarOpen:false})
    }

    handleSubmit(event){
        event.preventDefault();
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
                depid:event.target.depid.value,
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
    render(){
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
                                <Form.Control type="text" name="depid" placeholder="Department" required/>
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
                            <Form.Group id="dateat">
                                <Form.Label>Date of Join</Form.Label>
                                <Form.Control type="date" name="dateat" placeholder="Select Date" required/>
                            </Form.Group>
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