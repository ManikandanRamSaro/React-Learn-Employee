import React,{Component} from 'react';
import { Row,Col,Button,Form } from 'react-bootstrap';
import FirstClass from '../ClassAndObjects/FirstClass';
 
import { Redirect,Link} from 'react-router-dom'; 
import APIService from '../ClassAndObjects/APIService';
export default class basicForm extends Component{

    constructor(props)
    {
        super(props);

        this.state = { counts:0,valuesOut:'',selectList:[],file:''} 
        this.formSUbmit= this.formSUbmit.bind(this);
       this.redirectNextPage = this.redirectNextPage.bind(this);
         
    }

    formSUbmit(event)
    {
        event.preventDefault();
        console.log(event.target,this.state.file,'name',this.state.file.name)

        const api= new APIService();
        const form=new FormData();
        form.append('file',this.state.file,this.state.file.name)

        

        api.fileUpload(form).then(out=>{
            console.log(out)
        })

    }
    componentDidMount()
    { 
        const manage=new FirstClass();  
        var inputdata=manage.returnListofData(); 
        this.setState({selectList:inputdata})
    }
    getText(event) 
    {
        let input=event.target.value;
        const obje=new FirstClass();  
        this.setState({valuesOut:obje.toUpperCase(input)}) // simple upper case convertion
    }

    getTextDropdown(event) 
    { 
        const obje=new FirstClass();    
        var index = event.nativeEvent.target.selectedIndex; // get index of the selected list
        
        let input = event.nativeEvent.target[index].text;  // based on index get record from select
        console.log(index,input);
        this.setState({valuesOut:obje.toUpperCase(input)})  
    }
    getTextSentence(event) 
    {
        let input=event.target.value;
        const obje=new FirstClass();  
        this.setState({valuesOut:obje.sortedList(input)}) // simple upper case convertion
    }
    redirectNextPage()
    { 
        this.props.history.push('/formika');
         
    }

    setFileTOObject(event)
    {
        console.log(event.target,event.target.files)
        this.setState({
            file:event.target.files[0]
        })
    }
    render()
    {
       
        return(
           <div className="container">
                        <h4>Textbox Event</h4>
                        <button  onClick={this.redirectNextPage} className="sm-2 mr-2 btn btn-warning"  >Redirect Using button</button> 
                        <Link to="/formika" className="sm-2 mr-2  btn btn-info"> Using Link</Link>
                        <Form  onSubmit={this.formSUbmit}>
                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group id="textname">
                                        <Form.Label>To Upper</Form.Label>
                                        <Form.Control type="text" name="textname" onKeyUp={this.getText.bind(this)} placeholder="text here"/>
                                     </Form.Group>
                                     <Form.Group id="textSentence">
                                        <Form.Label>Sentence Case</Form.Label>
                                        <Form.Control type="text" name="textSentence" onKeyUp={this.getTextSentence.bind(this)} placeholder="text here"/>
                                     </Form.Group>
                                     <Form.Group id="number">
                                        <Form.Label>Numbers Sorting</Form.Label>
                                        <Form.Control type="text" name="number" onKeyUp={this.getTextSentence.bind(this)} placeholder="text here"/>
                                     </Form.Group>
                                     <Form.Group id="Select">
                                        <Form.Label>Select List</Form.Label>
                                             <Form.Control as="select" name="Select" onChange={this.getTextDropdown.bind(this)}>
                                                 {
                                                     this.state.selectList.map(da=>
                                                         <option key={da.id} value={da.id}>{da.name}</option>
                                                     )
                                                 }
                                            </Form.Control>
                                     </Form.Group>
                                     <Form.Group id="fileUpload" className="custom-file">
{/*                                     
    <input type="file" class="custom-file-input" id="customFile">
    <label class="custom-file-label" for="customFile">Choose file</label>  */}
                                      
                                        <Form.Control type="file" name="fileUpload" className=" form-control-file border" onChange={(event)=>this.setFileTOObject(event) } placeholder="text here"/>
                                        <Form.Label>File upload</Form.Label>
                                     </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                   <h6>{this.state.valuesOut}</h6>
                                </Col>
                            </Row>
                           
                           
                            <Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group> 
                      </Form>
           </div>
        );
    }
}