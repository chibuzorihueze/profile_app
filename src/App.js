import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import Button from "./components/button";
import content from "./components/content";
import Icon from "./components/icon";
import Footer from "./components/footer";
import Contact from "./components/contact";


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
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<>
      <Profile />
      {content.map(createButton)}
      <Icon />
      <Footer /></>}>
    </Route>
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
