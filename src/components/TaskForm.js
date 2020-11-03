import React, {Component} from 'react';

export default class TaskForm extends Component{
    state={
        title:'',
        description:''
    }
    onSubmit =  e => {
        this.props.addTask(this.state.title,this.state.description);
        e.preventDefault();
        
    }
    onChange = e=> {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }   
    
    render(){
        
        return (
            <form onSubmit = {this.onSubmit}>
               <input 
               name='title'
               type ='text' 
               placeholder= 'write a text' 
               onChange={this.onChange} 
               value={this.state.title}/>
               <br/>
               <br/>
               <textarea 
               name='description'
               placeholder ='write a description' 
               onChange={this.onChange} 
               value={this.state.description}/> 
               {/* <input type='submit'/> */}
               <button type='submit'>
                   Save a Task
               </button>
            </form>
        )
    }
}    