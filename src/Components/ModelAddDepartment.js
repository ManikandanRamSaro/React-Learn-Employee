import React,{Component} from 'react';
import {Row,Col,Model,Button,Form,Modal} from 'react-bootstrap';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export default class ModelAddDepartment extends Component{

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
        fetch('http://localhost:62489/api/Default/addDepart',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:null,
                depname:event.target.depname.value
            })
         })
            .then(res=>res.json())
            .then((result)=>{
                this.setState({snackbarOpen:true,messageDis:'New Department Added'})
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
                Add Departments
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container">
                <Row>
                    <Col sm={12} md={8} lg={6}>
                    <Form onSubmit={this.handleSubmit}>
                            <Form.Group id="depname">
                                <Form.Label>Department Name</Form.Label>
                                <Form.Control type="text" name="depname" placeholder="Department Name" required/>
                            </Form.Group>
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