
import './App.css';
import {About} from './components/about.js';
import {Navbar} from './components/navbar.js';
import Freetime from './components/freetime.js';
import {Codesnippets} from './components/codesnippets.js';
import Footer from './components/footer.js';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
