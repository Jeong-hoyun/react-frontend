import React from "react";


function ThemedButton({theme,label, ...restProps}){
    return (
        <button className={`btn btn-${theme}`} {...restProps} >
            {label}
         </button>
    );
}

ThemedButton.defaultProps={
    theme:'default',
}
ThemedButton.defaultProps={
    theme:'PropTypes.string',

}





export default ThemedButton;