<?php

namespace App\Http\Controllers;

use App\Http\Resources\KupovinaResource;
use App\Models\kupovina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KupovinaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return KupovinaResource::collection(Kupovina::all());
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
 
            'datum_kupovine' => 'required|string',
            'user_id'=>'required|integer|exists:users,id',
            'nekretnina_id'=>'required|integer|exists:nekretninas,id',

    
           
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());
        $d = kupovina::create([
            'datum_kupovine' => $request->datum_kupovine, 
            'user_id' => $request->user_id, 
            'nekretnina_id' => $request->nekretnina_id,
 

        ]);
        $d->save();
        return response()->json(['Kreirano!',  $d,'status'=>200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\kupovina  $kupovina
     * @return \Illuminate\Http\Response
     */
    public function show(kupovina $kupovina)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\kupovina  $kupovina
     * @return \Illuminate\Http\Response
     */
    public function edit(kupovina $kupovina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\kupovina  $kupovina
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, kupovina $kupovina)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\kupovina  $kupovina
     * @return \Illuminate\Http\Response
     */
    public function destroy(kupovina $kupovina)
    {
        //
    }
}
