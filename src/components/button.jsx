import React from "react";

function Button(props){
    return(
        
        <div className="button_container">
            <a className="button" id={props.id} href={props.link}  target="_self" rel="noopener noreferrer">{props.name}</a>
        </div>
    );
}
export default Button;