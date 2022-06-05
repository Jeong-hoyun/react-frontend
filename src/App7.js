import React,{createContext} from "react";

const MessageContext =react.createContext();

const App()=>{
    <Level1 message="Context API in React"/>
};


const Level1=({message})=> {
    <Level2 message={message}></Level2>

};

const Level2=({message})=> {
    <Level3 message={message}></Level3>

};


const Level3=({message})=> {
    <div>
        <MessageContext.consumer>
            {}
        </MessageContext.consumer>
    </div>

};
const Level4=()=> {

};

export default App;