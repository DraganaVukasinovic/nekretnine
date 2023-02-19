 
 
import React, { useState } from 'react';
 
import BarChartComponent from './BarChart';

function Statistike({kupovine}) {
   
    
    console.log()


   return (
       
          <>       
            <BarChartComponent  kupovine={kupovine}></BarChartComponent>
       </>

   );
 }
 
 export default Statistike;
 