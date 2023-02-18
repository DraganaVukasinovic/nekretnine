import React from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
 
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Azuriraj({nekretnina}) {


    
    const [nekretninaData,setNekretninaData]=useState({
        naziv:nekretnina.naziv,
        opis:nekretnina.opis,
        adresa:nekretnina.adresa,
        tip_id:nekretnina.tip_id,
        kvadratura:nekretnina.kvadratura,
        broj_kupatila:nekretnina.broj_kupatila,
        broj_soba:nekretnina.broj_soba,
        cena:nekretnina.cena,


    });
    function handleInput(e){  
    
        let newNekretninaData = nekretninaData;  
        newNekretninaData[e.target.name]=e.target.value;
        console.log(newNekretninaData)
        setNekretninaData(newNekretninaData); 
    }
    let navigate = useNavigate();
    function handleUpdate(e){
      
        e.preventDefault();   


               
        axios
        .put("http://127.0.0.1:8000/api/nekretnine/"+nekretnina.id, nekretninaData )
        .then((res)=>{  
            console.log(res.data);
            if(res.status===200){
             
               alert("USPEH")
                navigate('/admin')

            }else{
                alert("NEUSPESNO");
            }
        });

    }
  return (
        <div className='login'>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Azuriraj nekretninu</h2>
                            <form onSubmit={handleUpdate} >                          
                                                      
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="Naziv" 
                                        name="naziv"
                                        onInput={handleInput}
                                        defaultValue={nekretnina.naziv}
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="Opis" 
                                        name="opis"
                                        onInput={handleInput}
                                        defaultValue={nekretnina.opis}

                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="adresa" 
                                        name="adresa"
                                        onInput={handleInput}
                                        defaultValue={nekretnina.adresa}

                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="cena" 
                                        name="cena"
                                        onInput={handleInput}
                                        defaultValue={nekretnina.cena}

                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="broj_soba" 
                                        name="broj_soba"
                                        onInput={handleInput}
                                        defaultValue={nekretnina.broj_soba}

                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="broj_kupatila" 
                                        name="broj_kupatila"
                                        onInput={handleInput}
                                        defaultValue={nekretnina.broj_kupatila}

                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="kvadratura" 
                                        name="kvadratura"
                                        onInput={handleInput}
                                        defaultValue={nekretnina.kvadratura}

                                    />
                                </div>
                                <div className="input-group">
                                <label htmlFor="tip_id">Tip</label>

                                        
                                    <select name="tip_id" id="tip_id" onInput={handleInput}  defaultValue={nekretnina.tip_id}  >
                                    <option value={1}>Kuca</option>
                                    <option value={2}>Stan</option>
                                    <option value={3}>Vikendica</option>
                                    <option value={4}>Poslovni prostor</option>
                                    <option value={5}>Garaza</option>
                                  


                                    </select>
                                </div>
                         
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Submit</button>
                                </div>
                                <br/><br/>
                                <p><a href="/register"  className='tekstForme'>I am new here!</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </div>
        
    );
}

export default Azuriraj;
