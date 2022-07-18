import { Button,Input } from 'antd';
import React,{useState} from 'react';

function useState() {

  const [minutes,setMinutes]=useState();
  
  const onChange=(event)=>{
    setMinutes(event.target.value)
    console.log(event.target.value)    
  }

  const reset=()=>{
    setMinutes(0)   
  }

  return (
    <>
    <div className=''>
      <h1>Super converter</h1>
      <label htmlFor='minutes'>minutes {minutes}</label>      
      <Input value={minutes}
       id='minutes'
       placeholder='minutes'
       type='number'      
       onChange={onChange}></Input>
       </div>
      <div>
       <br></br>    
       <br></br>
      <label  htmlFor='Hours' >Hours</label>
      <Input placeholder='Hours' 
      type='number'
      id='Hours'     
      value={minutes/60}
      onChange={onChange}></Input>
      <Button onClick={reset}>reset</Button>
  </div>
  </>
  );
}



