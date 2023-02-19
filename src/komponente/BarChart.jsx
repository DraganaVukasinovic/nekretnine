import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

 

const BarChartComponent = ({kupovine}) => {
    const data=[];
    function brojProdatihNekretninaGodisnje(godina){ //po zadatku
        var brojac=0;
        for(var i=0;i<kupovine.length;i++){
          console.log(kupovine[i].datum_kupovine)
            if(kupovine[i].datum_kupovine.includes(godina+"")){
                brojac++;
            }
        }
      
        return brojac;
      }
 

      for(var i=2018;i<2023;i++){
        if(brojProdatihNekretninaGodisnje(i)!=0){
          data.push({godina:i,broj_kupljenih_nekretnina:brojProdatihNekretninaGodisnje(i)})

        }
      }

  return (
    <BarChart
      width={1000}
      height={800}
      data={data}
      margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="godina" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="broj_kupljenih_nekretnina" fill="#8884d8" />
 
    </BarChart>
  );
};

export default BarChartComponent;
