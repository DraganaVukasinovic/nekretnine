<?php

namespace App\Http\Controllers;

use App\Http\Resources\NekretninaResource;
use App\Models\nekretnina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
 
class NekretninaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return NekretninaResource::collection(Nekretnina::all());
    }

 
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:100',
            'opis' => 'required|string|max:250', 
            'adresa' => 'required|string',
            'tip_id'=>'required|integer|exists:tips,id',
            'cena' => 'required|integer',
            'broj_soba' => 'required|integer',
            'broj_kupatila' => 'required|integer',
            'kvadratura' => 'required|integer',
           
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());
        $d = Nekretnina::create([
            'naziv' => $request->naziv, 
            'opis' => $request->opis, 
            'adresa' => $request->adresa,
            'tip_id' => $request->tip_id,
            'cena' => $request->cena,
            'broj_soba' => $request->broj_soba,  
            'kvadratura' => $request->kvadratura,  
           
            'broj_kupatila' => $request->broj_kupatila,  

        ]);
        $d->save();
        return response()->json(['Kreirano!', $d]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\nekretnina  $nekretnina
     * @return \Illuminate\Http\Response
     */
    public function show(nekretnina $nekretnina)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\nekretnina  $nekretnina
     * @return \Illuminate\Http\Response
     */
    public function edit(nekretnina $nekretnina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\nekretnina  $nekretnina
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:100',
            'opis' => 'required|string|max:250', 
            'adresa' => 'required|string',
            'tip_id'=>'required|integer|exists:tips,id',
            'cena' => 'required|integer',
            'broj_soba' => 'required|integer',
            'broj_kupatila' => 'required|integer',
            'kvadratura' => 'required|integer',
           
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());

            $d = Nekretnina::find($id);

        if( $d){
            $d->naziv=$request->naziv;
            $d->opis=$request->opis;
            $d->adresa=$request->adresa;
            $d->tip_id=$request->tip_id;
            $d->cena=$request->cena; 
            $d->broj_kupatila=$request->broj_kupatila; 
            $d->kvadratura=$request->kvadratura; 
            
            $d->broj_soba=$request->broj_soba; 
             
            $d->save();
            return response()->json(['Uspesno izmenjeno!',  $d]);

        }else{
            return response()->json('Trazeni objekat ne postoji u bazi');

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\nekretnina  $nekretnina
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $d = Nekretnina::find($id);
        if($d){
            $d->delete();
            return response()->json(['Uspesno obrisano!', $d]);
        
        }
           
       return response()->json('Trazeni objekat ne postoji u bazi');
    }
}
