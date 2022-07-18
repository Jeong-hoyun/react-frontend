import { Button,Input } from 'antd';
import React,{useState} from 'react';


function TimetoCheck() {

  const [minutes,setMinutes]=useState();
  const [toggle,setToggle]=useState(false);
  
  const onChange=(event)=>{
    setMinutes(event.target.value)
    console.log(event.target.value)    
  }

  const reset=()=>{
    setMinutes(0)   
  }

const onToggle=()=>{
  setToggle(currnet=>!currnet);
}

  return (
    <>
    <div className='fisrt'>
      <h1>Super converter</h1>
      <label htmlFor='minutes'/>minutes
      <Input value={toggle? minutes*60:minutes}
       id='minutes'
       placeholder='minutes'
       type='number'      
       onChange={onChange}
       disabled={toggle}></Input>
       </div>
      <div className='second'>    
      <label  htmlFor='Hours'>Hours</label>
      <Input placeholder='Hours' 
      type='number'
      id='Hours'     
      value={toggle? minutes:minutes/60}
      disabled={!toggle}
      onChange={onChange}/>
      <Button onClick={reset}>reset</Button>
      <Button onClick={onToggle}>onToggle</Button>
  </div>
  </>
  );
}


export default TimetoCheck







