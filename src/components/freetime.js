import React,{useState} from 'react';

import ReactCardFlip from 'react-card-flip';
import {freetimeContent} from "./freetimecontent.js"

const Freetime = () =>{


  return (
    <div className=' m-6 h-auto flex flex-wrap content-start ...'>
      {freetimeContent.map((freetime, key) =>{
        return (
          
        <div key={key} className ="max-w-md mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2 p-10 " >
        <h1 className="text-2xl">{freetime.headline}</h1>
        
        </div>



      
        )
      })}
    </div>
    )
}

  
export default Freetime;


