import React from 'react';
import {freetimeContent} from "./freetimecontent.js"

const Freetime = () =>{
  return (
    <div className=' m-6 h-auto flex flex-wrap content-start ...'>
      {freetimeContent.map((freetime, index) =>{
        return (
        <div className ="max-w-md mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2 p-10">
        <h1 className="text-2xl">{freetime.headline}</h1>
        <h1>{freetime.paragraph}</h1>
        </div>
        )
      })}
    </div>
    )
}

  
export default Freetime;


