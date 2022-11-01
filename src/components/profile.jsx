import React from "react";
import './portrait.jpg';

function Profile(){
    return (<div>
        <img id="profile_img" src={require("./portrait.jpg")} alt="profile" />
        <p>Chibuzor Ihueze </p>
        </div>
    );
}

export default Profile;