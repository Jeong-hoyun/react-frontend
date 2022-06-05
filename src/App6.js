import React, { useState } from "react";


const App = ()=>{
    const [name, setName] =useState('');
    const [age, setAge] =useState('');
    return (
        <div>
            name : {name},age:{age}
            <input type="text" placeholder="name" onChange={e=>setName(e.target.value)}/>
            <input type="text" placeholder="age" onChange={e=>setAge(e.target.value)}/>
        </div>
    )

};

export default App;