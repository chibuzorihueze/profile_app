import React from "react";
import Profile from "./components/profile";
import Button from "./components/button";
import content from "./components/content";
import Icon from "./components/icon";

//create button function
function createButton(title){
  return<Button
    id = {title.id}
    name = {title.name}
    link = {title.link}
  />
}

function App() {
  return (
    <div>
    <Profile/>
    {content.map(createButton)}
    <Icon/>
    </div>
  );
}

export default App;
