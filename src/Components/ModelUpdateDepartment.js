import React,{Component} from 'react';
import {Row,Col,Model,Button,Form,Modal} from 'react-bootstrap';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export default class ModelUpdateDepartment extends Component{

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
        //http://localhost:62489/api/Default/updateDepart
        fetch('http://localhost/ReactWebAPI/api/Default/updateDepart',{  
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:event.target.depid.value,
                depname:event.target.depname.value
            })
         })
            .then(res=>res.json())
            .then((result)=>{
                this.setState({snackbarOpen:true,messageDis:'Department updated'})
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
                Update Departments
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container">
                <Row>
                    <Col sm={12} md={8} lg={6}>
                    <Form onSubmit={this.handleSubmit}>
                           <Form.Group id="depid">
                                <Form.Label>Department id</Form.Label>
                                <Form.Control type="text" name="depid" placeholder="Department id " disabled defaultValue={this.props.depid} required/>
                            </Form.Group>
                            <Form.Group id="depname">
                                <Form.Label>Department Name</Form.Label>
                                <Form.Control type="text" name="depname" placeholder="Department Name" required defaultValue={this.props.depname}/>
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit">Update</Button>
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