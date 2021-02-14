import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import {About} from './components/about.js';
import Codesnippets from './components/codesnippets.js';
import Footer from './components/footer.js';
import Freetime from './components/freetime.js';
import Home from './components/home.js'
import {Navbar} from './components/navbar.js';
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
<div className ="page-container bg-green-100">
<div className ="content-wrap">
<Router>
<Navbar />
 <Switch>

   <Route path="/" exact component={Home}/>
   <Route path="/about" component={About}/>
   <Route path="/freetime" component={Freetime}/>
   <Route path="/codesnippets" component={Codesnippets}/>
  </Switch>
  </Router>
     
      </div>
      
      <Footer/>
     </div>

    
);

}

export default App;
