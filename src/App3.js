import ErrorBoundary from "ErrorBoundary";
import React from "react";

class Message extends React.Component{
    render(){
        throw new Error("option error");
        return "Message Componet";
    }
}




class App3 extends React.Component{

    render(){
        return(
            <ErrorBoundary>
                <Message></Message>
            </ErrorBoundary>

        )
    }
}

export default App3;