
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
    <Header title="My List" searchBar={true}/> 
    <p className="fs-1 fw-bold text-center text-decoration-underline">Info</p>
    <Info/> 
    <p className="fs-1 fw-bold text-center text-decoration-underline">Wash</p>
    <Wash/> 
    <p className="fs-1 fw-bold text-center text-decoration-underline">Wardrobe</p>
    <Wardrobe/>     
    <Footer/>
    </>
  );
}

export default App;
