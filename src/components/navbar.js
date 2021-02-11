import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import React from 'react';

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
<nav className="bg-red-100 fixed inset-x-0">
<div className="flex">
  <div className="w-5/6" ></div>
    {menuItems.map((item, index, key) =>{
      return(
        <div className="text-black-300 hover:bg-red-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hidden md:flex"><Link to={item.url}>{item.title}</Link></div>
        )
    })}
    <div className="md:hidden">
      <button>
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg></button>
    </div>
    
</div>
<div className="mobile-menu hidden">
      {menuItems.map((item, index, key) =>{
      return(
        <div className="text-black-300 hover:bg-red-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium "><Link to={item.url}>{item.title}</Link></div>
        )
    })}
    </div>
</nav>
)
}

