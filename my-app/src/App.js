
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Wash} from './MyComponents/Wash';
import {Wardrobe} from './MyComponents/Wardrobe';
import {Info} from './MyComponents/Info';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";


function App() {
  
  return (
    <>
    <HashRouter>
    <Header title="My List" searchBar={false}/>
    <Switch>
          
          <Route exact path="/" component={()=>
            (
              <>
              <h1>Hello !!</h1>
              </>
            )
          
          }/>
          <Route exact path="/info" component={Info}/>
          <Route exact path="/wash" component={Wash}/>
          <Route exact path="/wardrobe" component={Wardrobe}/>
            
    </Switch>
    
    
    
    <Footer/>
    </HashRouter>
    </>
  );
}

export default App;
