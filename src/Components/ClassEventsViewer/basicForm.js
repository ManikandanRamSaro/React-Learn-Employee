import React,{Component} from 'react';
import { Row,Col,Button,Form } from 'react-bootstrap';
import FirstClass from '../ClassAndObjects/FirstClass';
export default class basicForm extends Component{

    constructor(props)
    {
        super(props);

        this.state = { counts:0,valuesOut:''} 
    }

    getText(event) 
    {
        let input=event.target.value;
        const obje=new FirstClass();  
        this.setState({valuesOut:obje.toUpperCase(input)}) // simple upper case convertion
    }
    getTextSentence(event) 
    {
        let input=event.target.value;
        const obje=new FirstClass();  
        this.setState({valuesOut:obje.sortedList(input)}) // simple upper case convertion
    }
    render()
    {
 
        return(
           <div className="container">
                        <h4>Textbox Event</h4>
                        <Form  >
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group >
                                        <Form.Label>To Upper</Form.Label>
                                        <Form.Control type="text" onKeyUp={this.getText.bind(this)} placeholder="text here" required/>
                                     </Form.Group>
                                     <Form.Group >
                                        <Form.Label>Sentence Case</Form.Label>
                                        <Form.Control type="text" onKeyUp={this.getTextSentence.bind(this)} placeholder="text here" required/>
                                     </Form.Group>
                                     <Form.Group >
                                        <Form.Label>Numbers Sorting</Form.Label>
                                        <Form.Control type="text" onKeyUp={this.getTextSentence.bind(this)} placeholder="text here" required/>
                                     </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                   <h6>{this.state.valuesOut}</h6>
                                </Col>
                            </Row>
                           
                           
                            {/* <Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group> */}
                      </Form>
           </div>
        );
    }
}