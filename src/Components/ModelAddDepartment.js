import React,{Component} from 'react';
import {Row,Col,Model,Button,Form,Modal} from 'react-bootstrap';

export default class ModelAddDepartment extends Component{

    constructor(props){
        super(props);
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
                alert('Success');
                console.log(result)
            },
            (error)=>{
                alert('error');
                console.log(error)
            
        })
    }
    render(){
        return(
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
        )
    }
}