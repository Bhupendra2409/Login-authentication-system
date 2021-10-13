
import './App.css';

import {Mainmenu} from "./My_components/Mainmenu";
import {Userlogin} from "./My_components/Userlogin";
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export const App=()=> {

  
  return (
    
    <Router>
    <Route path="/" exact component={Userlogin} />
    <Route path="/chat"  component={Mainmenu} />
  </Router>
  );
}



