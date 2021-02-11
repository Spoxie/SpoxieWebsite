import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import {About} from './components/about.js';
import {Codesnippets} from './components/codesnippets.js';
import Footer from './components/footer.js';
import Freetime from './components/freetime.js';
import {Navbar} from './components/navbar.js';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
<div className ="page-container">
<div className ="content-wrap">
<Router>
<Navbar />
 <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/codesnippets">
            <Codesnippets />
          </Route>
          <Route path="/freetime">
            <Freetime />
          </Route>
        </Switch>
     
      </Router>
      
      </div>
      <Footer/>
     </div>

    
);

}

export default App;
