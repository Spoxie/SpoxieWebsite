import React from 'react';
import {codesnippetCards} from "./codes.js"

const Codes = () =>{
  return (
    <div className=' m-6 h-auto flex flex-wrap content-start ...'>
      {codesnippetCards.map((code, index) =>{
        return (
        <div className ="max-w-md mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2 p-10">
        <h1 className="text-2xl">{code.headline}</h1>
        <h1>{code.paragraph}</h1>
        </div>
        )
      })}
    </div>
    )
}

  
export default Codes;