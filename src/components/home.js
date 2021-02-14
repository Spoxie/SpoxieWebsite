import React, {useState} from 'react';
import { Spring, animated } from 'react-spring/renderprops';

function Home(){

const [text, setText] = useState("Hello World!!!!!!!!!!")



return(
 <div className=" ml-20 mr-20 grid justify-items-stretch ...">
   
      <div className="justify-self-auto ... " >
      <Spring
      from={{opacity:0}}
      to={{opacity:1}}
      config= {{ duration: 2000 }}
     >
         {props =>(
          
    <h1 onClick={() => setText("Hei vain maailma!")} className="font-extrabold text-7xl m-20" style ={props}>{text}</h1>
      )}</Spring>
      
      
      <p className="text-left">
        Nimeni on Mirko Piitulainen, ja tässä on minun tekemät nettisivut, käyttäen reactia sekä tailwind css! Sivuja yritän päivitellä, 
        kun opin uusia tekniikoita, mutta huomioikaa, että teen tätä vain vapaa-ajalla (koulu menee aina edelle).<br></br>
        Kiitos kun tulit selaamaan sivujani! Alapalkista löytyy minun yhteystietoni, sekä footerista löytyy myös hieman lisätietoja minusta :)
        Kiitos kun tulit vierailemaan sivuillani!</p></div>
        <p className="text-sm mt-80" >ainiin, paina tuota hello worldia, se vaihtaa tekstiä!</p>
        </div> 

)
}
export default Home