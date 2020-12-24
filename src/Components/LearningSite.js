import React,{Component} from 'react';
export default class LearningSite extends Component{
    render()
    {
        return(
            <div className="bg-primary p-5">
                   <a href="https://react-bootstrap.github.io/" target="_blank" className="btn btn-primary" >React Bootstrap</a>
                   <a href="https://reactrouter.com/web/guides/quick-start" target="_blank" className="btn btn-info" >React Router</a>
                   <a href="https://www.digitalocean.com/community/tutorials/how-to-validate-a-login-form-with-react-and-formik#:~:text=How%20To%20Validate%20a%20Login%20Form%20With%20React,to%20write%20your%20ValidatedFormComponent.%20...%20More%20items...%20" target="_blank" className="btn btn-info" >Form Validator</a>
            </div>
        );
    }
}