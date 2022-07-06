import React from "react";
import {Input, List, Button} from "antd";



const TodoItem=({ todo })=> <li>{todo}</li>


// SPA 



class TodoList extends React.Component{

    state={
        TodoList: ['javascript study','typescript study'],
        current: '',
    }


    onclick=()=>{

        this.setState((prevState)=>{
            const {value} =prevState;
            return {value:value+1};
        }
        
        )
        
    }



      
    render(){
        return (
            <div style={{ width:'300px', margin :'30px auto' }}>
                { this.state.TodoList.map(todo=>
                    <li>{todo}</li>
                )}
                <Button onclick={this.state.TodoList}>click</Button>

            </div>
        )
    }
}

export default TodoList;