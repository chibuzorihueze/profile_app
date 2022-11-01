import React from "react";

function Button(props){
    return(
        <div>
            <a id={props.id} href={props.link}>{props.name}</a>
        </div>
    );
}
export default Button;