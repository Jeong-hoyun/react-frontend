import React from 'react';
import './App.css';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import ThemedButton from 'ThemedButton';
import Message from 'Message';
import Profile from 'Profile';

class PostDetail extends React.Component{
  static propTypes={
    postId: PropTypes.number.isRequired,
  }
}

function Person({ name , age, region}){
  return (
    <div>
      hello. I am {name} . {age} i am from {region}
      </div>
  );

}

Person.defaultProps={
  region: 'gumi'
}



class Counter1 extends React.Component{
  
  state = {
    value : 0,
  }

  onClick=()=> {
    this.setState(prevState=>({
      value: prevState.value+1
    }))

  }
  


  render() {
    const { value } = this.state;
    return (
    <div>
      <ul>
    Counter1 :{value}
    <Button onClick={this.onClick}>+1</Button>
    </ul>
    </div>
    )
  }
}

class FruitComponent extends React.Component{
  render(){
    const fruit =['딸기','바나나','사과']
    return(
      <div>
        <ThemedButton label="say hello"/>
        <h1>좋아하는 과일</h1>
        <ul>
          {
            fruit.map(index=>{
              return <li index>{index}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
const baseState = [
  {
  todo: "Learn typescript",
  done: true
  },
  {
  todo: "Try immer",
  done: false
  }
  ];


const newstate =[
  {
  ...baseState.todo,
  ...baseState.done,
  },
{
  ...baseState.todo,
  ...baseState.done,
}
]

class App extends React.Component{
  
   render(){
     return(
      <div>
        <baseState value={baseState.todo}/>
        <Counter1/>
        <Profile/>
        <Message/>

      </div>

     )

   }
   
}



export default App;
