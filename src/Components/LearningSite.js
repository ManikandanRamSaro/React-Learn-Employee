import React,{Component} from 'react';
export default class LearningSite extends Component{
    render()
    {
        return(
            <div className="bg-primary p-5">
                   <a href="https://react-bootstrap.github.io/" target="_blank" className="btn btn-primary" >React Bootstrap</a>
                   <a href="https://reactrouter.com/web/guides/quick-start" target="_blank" className="btn btn-info" >React Router</a>
            </div>
        );
    }
}