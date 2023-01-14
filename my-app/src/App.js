
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Wash} from './MyComponents/Wash';
import {Wardrobe} from './MyComponents/Wardrobe';
import {Info} from './MyComponents/Info';
import React from 'react';



function App() {
  
  return (
    <>
    <Header title="My List" searchBar={false}/> 
    <Info/> 
    <Wash/> 
    <Wardrobe/>     
    <Footer/>
    </>
  );
}

export default App;
