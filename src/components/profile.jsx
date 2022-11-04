import React from "react";
import './portrait.jpg';

function Profile(){
    return (<div>
        <img id="profile_img" src={require("./portrait.jpg")} alt="profile" />
        <p className="profile_name">Krisykord</p>
        <p id="slack">chibuzor christian ihueze</p>
        </div>
    );
}

export default Profile;