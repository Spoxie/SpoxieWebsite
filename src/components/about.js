import React from 'react';
import { Spring } from 'react-spring/renderprops';
import "./styles/about.css";
export function About() {
  return (

    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props =>(
        <div className="about-flex-container" style ={props}>
          
          
          <div className="m-20 w-1/2 md:w-full">
            <img src="https://poromagia.com/media/cache/96/e4/96e41d6aae53177e6753231ccc7ac67c.jpg" alt=""></img>
          </div>
          <div className="m-20">Nu excepteur ex. Laborum eu laboris id deserunt deserunt aliquip nostrud proident culpa. Minim ullamco fugiat amet deserunt labore eu minim commodo. Voluptate excepteur non id cillum aliquip laborum ullamco est. Laborum labore exercitation consequat fugiat elit Lorem ex irure non.</div>
          
          </div>
      
      )}
  
      </Spring>
   
  );
}