import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const menuItems = [{
  title: "about",
  url: "/about"
},{
  title: "codesnipptes",
  url: "/codesnippets"
},
{
  title: "freetime",
  url: "/Freetime"
}
]

export function Navbar() {
return (
  <div className="Navbar">
<navbar>
  <ul className ="nav-list">
    {menuItems.map((item, index, key) =>{
      return(
        <li className="text-black-300 hover:bg-red-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><Link to={item.url}>{item.title}</Link></li>
        )
    })}

    
   
  </ul>
  
</navbar>
</div>
)
}

