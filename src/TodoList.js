import React from "react";
import {Input, List} from "antd";
import produce from "immer";
class TodoItem extends React.Component{
   render(){
       const {todo} =this.props;
        return(
        <li> {todo} </li>    
        )
    }
}


class TodoList extends React.Component{

    state={
        TodoList: ['python study','django study'],
        current: '',
    }

    onChange=(e)=>{
        const {value}=e.target;
        console.log(value);
    }

    onKeyDown=(e)=>{
        if (e.keyCode===13){
            this.setState(
             produce(this.state,draft=>{
              const current =draft.current.trim();
            if(current.length>0){
                draft.current='';
                draft.todoList.push(current);
            }    
        })
        
        )
     }}
  
     //    const {TodoList, current}=this.state;
     //  this.setState({
    //       current:'',
    //      todoList:[...TodoList,current.trim()],
    //  })
    render(){
        return (
            <div style={{ width:'300px', margin :'30px auto' }}>
                <List 
                header={"Todo List"} 
                dataSource={this.state.todoList}
                bordered={true}/>
                <Input 
                 type="text"
                />
                 <ul>
                {this.state.TodoList.map(todo=>
                <li> {todo} </li>
                    )}
                </ul>
                <input onChange={this.onChange} onKeyDown={this.onKeyDown}/>
                <button>submit</button>
            </div>
        )
    }
}

export default TodoList;