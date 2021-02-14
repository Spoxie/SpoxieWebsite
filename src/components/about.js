import "./styles/about.css";

import React from 'react';
import { Spring } from 'react-spring/renderprops';

export function About() {
  return (

    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{duration:2000}}
    >
      {props =>(
        <div className="flex flex-wrap content-start ..." style ={props}>
          
         
          <div className="md:w-full text-align: left mr-44  ml-44 mt-20">
            <h1>Mitä teen tällä hetkellä</h1>
              <p className="font-mono">Olen tällä hetkellä kolmannen vuoden tieto- ja viestintätekniikan opiskelija HAMK:ssa, jossa olen pyrkinyt suuntaamaan opintoni pääosin webdevaukseen (varsinkin frontend tekniikoihin)
              Frontend tekniikoitten lisäksi olen kiinnostunut mm. mobiilidevauksesta, jota olen tehnyt Android studion avulla.</p>
          </div>

          <div className="md:w-full text-align: left mr-44  ml-44 mt-20">
            <h1>Tavoitteeni</h1>
              <p className="font-mono">Yksi päätavoitteistani on tulla hyväksi koodaajaksi, ja oppia joka päivä jotain uutta sen saralta. Tällä hetkellä pyrin saamaan työpaikkaa/harjoittelumahdollisuutta, jossa voin kehittää 
              omia frontend taitoja, mutta myös muutkin tehtävät kiinnostavat minua (backendia olisi todella hauska kokeilla kunnolla)</p>
          </div>
          
          </div>
      
      )}
  
      </Spring>
   
  );
}