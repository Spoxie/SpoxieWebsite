import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import React, {useState} from 'react';

const menuItems = [
  {
  title: "home",
  url: "/"
},
{
  title: "about",
  url: "/about"
},
{
  title: "codesnipptes",
  url: "/codesnippets"
},
{
  title: "freetime",
  url: "/Freetime"
}
]
export function Navbar() {
const [show, setShow] = useState()
  
return (
<nav className="bg-red-100 inset-x-0">
<div className="flex">
  <div className="w-5/6 h-18" ></div>
    {menuItems.map((item, index) =>{
      return(
        <div key ={index} className="md:text-lg text-black-300 hover:bg-red-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hidden md:flex"><Link to={item.url}>{item.title}</Link></div>
        )
    })}
    <div className="md:hidden">
      <button onClick={() => setShow(!show)}>
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
    
</div>
{show?<div className="mobile-menu md:hidden text-center">
      {menuItems.map((item, index) =>{
      return(
        <div key ={index} className="text-black-300 hover:bg-red-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium "><Link to={item.url}>{item.title}</Link></div>
        )
    })}
    </div>:null}
</nav>
)
}

