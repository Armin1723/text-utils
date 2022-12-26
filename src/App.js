import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  const [theme, setTheme]= useState("light");
  const changeTheme=()=>{
    if(theme==='dark'){
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.querySelector('.textform').style.backgroundColor='white';
      document.querySelector('.textform').style.Color='black';
      document.querySelector('.mainform').style.Color='black';}
      else{
      setTheme('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      document.querySelector('.textform').style.backgroundColor='#b4aba9';
      document.querySelector('.textform').style.Color='white';
      document.querySelector('.textform').style.Color='white';}
  }
  return (
    <>
    <Navbar mode={theme} changeTheme={changeTheme}/>
    <Textform placeholder="Enter your Text here"/>
    </>
  );
}

export default App;
