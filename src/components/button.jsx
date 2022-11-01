import React from "react";

function Button(props){
    return(
        <div>
            <a className="button" id={props.id} href={props.link}  target="_blank" rel="noopener noreferrer">{props.name}</a>
        </div>
    );
}
export default Button;