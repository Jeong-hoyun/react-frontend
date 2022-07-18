import { Button,Input } from 'antd';
import React,{useState} from 'react';


function TimetoCheck() {

  const [Mile ,setMile]=useState();
  const [toggle,setToggle]=useState(false);
  
  const onChange=(event)=>{
    setMile(event.target.value)
    console.log(event.target.value)    
  }

  const reset=()=>{
    setMile(0)   
  }

const onToggle=()=>{
  setToggle(currnet=>!currnet);
}

  return (
    <>
    <div className='fisrt'>
      <h1>Super converter</h1>
      <label htmlFor='km'/>km
      <Input value={toggle? Mile*0.621:Mile }
       id='km'
       placeholder='km'
       type='number'      
       onChange={onChange}
       disabled={toggle}></Input>
       </div>
      <div className='second'>    
      <label  htmlFor='Mile'>Mile</label>
      <Input placeholder='Mile' 
      type='number'
      id='Mile'     
      value={toggle? Mile :Mile /0.621}
      disabled={!toggle}
      onChange={onChange}/>
      <Button onClick={reset}>reset</Button>
      <Button onClick={onToggle}>onToggle</Button>
  </div>
  </>
  );
}


export default TimetoCheck


