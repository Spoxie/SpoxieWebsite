import React from 'react';
import {freetimeContent} from "./freetimecontent.js"


const Freetime = () =>{
  return (
    <div className=''>
      {freetimeContent.map((freetime, index) =>{
        return (
        <div>
        <h1 className="text-2xl">{freetime.headline}</h1>
        <h1>{freetime.paragraph}</h1>
        </div>
        )
      })}
    </div>
    )
}

  
export default Freetime;


