import React from 'react';
import { Spring } from 'react-spring/renderprops';
import {codesnippetCards} from "./codes.js"

const Codes = () =>{
  return (

    <div className=' m-6 h-auto flex flex-wrap content-start ...'>
      <Spring
      from={{opacity:0}}
      to={{opacity:1}}>
         {props =>(
      <div className="w-screen h-80 bg-green-100 content-center" style ={props}>
        <h1 className="text-3xl font-sans text-center">Tässä on joitain linkkejä minun projekteihini, mitä olen tehny mm. koulussa.<br></br>
         Pyrin päivittämään sivua mahdollisuuksien mukaaan. <br></br>Klikkaa ja katso mitä olen tehnyt :)</h1>
      </div>
      )}</Spring>
      {codesnippetCards.map((code, index) =>{
        return (

    <Spring
      from={{opacity:0}}
      to={{opacity:1}}
      config={{delay:1000}}>
         {props =>(
           <a href={code.link}>
        <div key ={index} className ="hover:bg-gray-300 max-w-md mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2 p-10" style ={props}>
   
        <h1 className="text-2xl text-center">{code.headline}</h1>
        <h1>{code.paragraph}</h1>
        
        </div></a>)}</Spring>
        )
      })}
    </div>
    )
}

  
export default Codes;