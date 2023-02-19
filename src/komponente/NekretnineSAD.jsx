import axios from "axios";
import { React, useState } from "react";
import { MDBDataTableV5 } from 'mdbreact';
 
import {  useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

function NekretnineSAD({nekretnine}) {
  
  console.log(nekretnine)
  const navigate = useNavigate();
  function handleLogout(){  
        
        var config = {
          method: 'post',
          url: 'http://127.0.0.1:8000/api/logout',
          headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
        };
      
        axios(config)
        .then(function (response) {
        
          console.log(response);
        
          window.sessionStorage.setItem('auth_token',null); 
          window.sessionStorage.setItem('auth_name',null); 
          window.sessionStorage.setItem('auth_id',null); 
          navigate('/');
          sessionStorage.clear();
          window.location.reload()

        })
        .catch(function (error) {
        
          
          console.log(error);
          

        }); 
  }
  const [datatable, setDatatable] = useState({
       
    columns: [
      {
        label: 'area_type',
        field: 'area_type',
        width: 150,
      },
      {
        label: 'id',
        field: 'id',
        width: 200,
      },
      {
        label: '_score',
        field: '_score',
        width: 270,
      },
      {
        label: 'city',
        field: 'city',
        width: 270,
      },
      {
        label: 'state_code',
        field: 'state_code',
        width: 270,
      },
      {
        label: 'lat',
        field: 'lat',
        width: 270,
      },
      {
        label: 'lon',
        field: 'lon',
        width: 270,
      },
     

       
    ],
    rows:  nekretnine.map((n)=>{
        return{
          area_type: n.area_type,
          id:n._id,
          _score:n._score,
          city:n.city,
          state_code:n.state_code,
          lat:n.centroid.lat,
          lon:n.centroid.lon,
        
         
        
        }
        

    })
   
})      
 
      function exportPDF() {

 
          const unit = "pt";
          const size = "A4"; // Use A1, A2, A3 or A4
          const orientation = "landscape"; // portrait or landscape

          const marginLeft = 40;
          const doc = new jsPDF(orientation, unit, size);

          doc.setFontSize(15);
          var today = new Date();
     
          const title = "Nekretnine u ponudi" +  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
          const headers = [["area_type", "_id","_score","city"]];
 
          const data = nekretnine.map(elt=> [elt.area_type, elt._id, elt._score,  elt.city]);
        
          let content = {
            startY: 50,
            head: headers,
            body: data ,
            
          };

          doc.text(title, marginLeft, 40);
          doc.autoTable(content);
          doc.save("nekretnine.pdf")
    }

  return (
    <div className="container">
        <div className="container">
            
           <button className="btn btn-primary" onClick={exportPDF}>Generisi PDF</button>

            <button className="btn btn-primary" onClick={handleLogout}>Odjavi se </button>
           
        </div>
         <div className='container'><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>;
        


    </div>
  )
}
 
export default NekretnineSAD;
