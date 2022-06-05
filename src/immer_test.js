const { produce} = require("immer");

const fruits =["orange","apple","bluebery","banana"];

produce(fruits,draft=> {
    draft.splice(1,2,"fineapple");
})

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
    ...baseState.map((a,index)=>
    index ===1 ? {...a,done:true}: a
    ),    
   ]

   




  console.log(newstate);