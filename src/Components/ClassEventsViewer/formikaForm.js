import React,{Component} from 'react';
import { Row,Col,Button,Form,Card } from 'react-bootstrap';
import FirstClass from '../ClassAndObjects/FirstClass';
import { Formik, FormikProps,  Field, ErrorMessage ,useFormik} from 'formik';
import * as yup from 'yup';


  
export default class formikaForm extends Component{

    constructor(props)
    {
        super(props);
        
    }

    validatorReact(input)
    {
        const errors = {};

            if (!input.password) {
              errors.password = 'Please Enter Password';
            } else if (input.password.length < 10) {
              errors.password = 'Password cannot exceed 10 characters';
            }
           
            if (!input.email) {
              errors.email = 'Please Enter Email ID';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
              errors.email = 'Invalid email address';
            }
          
            return errors;
    }
     
    render()
    {
        const schema = yup.object({
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            username: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
            zip: yup.string().required(), 
          });

          const myCombi = yup.object({
            userName: yup.string().required('Please enter user name').min(4,'User name minimum 4 in length'),
            email: yup.string().required().email('Pleae enter valid email id'),
            mobileNo: yup.number('Mobile number should be number').required('Please enter Mobile No').min(10,'Please enter 10 digit'),
            
          });
          
        return(
            <div>
                <Formik 
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={(values)=>this.validatorReact(values)}
                onSubmit= { (values)=>
                    console.log(JSON.stringify(values))
                }
                 
                render={
                    
                    () =>{
                        return(
                            <Form>
                                <h3>Using formik form elements </h3>
                            <Field type="text" name="email" placeholder="First Name"/>
                            <ErrorMessage name="email" />
                            <Field type="text" name="password" placeholder="Last Name" />
                            <ErrorMessage name="password" />
                            <button type="submit" >  
                                Submit Form
                            </button>
                            </Form>
                        )
                    }
                }
                > 
               </Formik>

               <Formik
                    validationSchema={schema}
                    onSubmit={ (values)=>console.log(values)}
                    initialValues={{
                        firstName: 'Mark',
                        lastName: 'Otto',
                    }}
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <hr/>
                            <h3>Using bootstrap and Formika </h3>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isValid={touched.firstName && !errors.firstName}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                            <Form.Label>Username</Form.Label>
                            
                                <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                isInvalid={!!errors.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                {errors.username}
                                </Form.Control.Feedback>
                            
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationFormik03">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                isInvalid={!!errors.city}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="State"
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.state}
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Zip"
                                name="zip"
                                value={values.zip}
                                onChange={handleChange}
                                isInvalid={!!errors.zip}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.zip}
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                            required
                            name="terms"
                            label="Agree to terms and conditions"
                            onChange={handleChange}
                            isInvalid={!!errors.terms}
                            feedback={errors.terms}
                            id="validationFormik0"
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                        </Form>
                    )}
                    </Formik>

                    <Formik
                    validationSchema={myCombi}
                    onSubmit={ (values)=>console.log(values)}
                    initialValues={{
                        userName: '',
                        email: '',
                        mobileNo: '',
                    }} 
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <hr/>
                            <h3>My Self Code</h3>
                            <Card className="mx-auto" style={{ width: '28rem' }}>
                            <Card.Body> 
                                <Form.Group controlId="txtuserName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="userName"
                                    value={values.userName}
                                    onChange={handleChange}
                                    isInvalid={!!errors.userName}
                                /> 
                                <Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group controlId="txtemail">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group controlId="txtmobileNo">
                                <Form.Label>User Mobile No</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="mobileNo"
                                    value={values.mobileNo}
                                    onChange={handleChange}
                                    isInvalid={!!errors.mobileNo}
                                />
                                <Form.Control.Feedback type="invalid">{errors.mobileNo}</Form.Control.Feedback>
                                </Form.Group>

                                <Button type="submit">Submit form</Button>
                            </Card.Body>
                            </Card>
                        
                        </Form>
                    )}
                    </Formik>
            </div>
        );
    }
} 
