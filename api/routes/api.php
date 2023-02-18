<?php

use App\Http\Controllers\AutfController;
use App\Http\Controllers\KupovinaController;
use App\Http\Controllers\NekretninaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post("/register",[AutfController::class,'register']);
Route::post("/login",[AutfController::class,'login']);

Route::get("/nekretnine",[NekretninaController::class,'index']);
 

Route::get("/kupovine",[KupovinaController::class,'index']);
Route::post("/kupovine",[KupovinaController::class,'store']);

 
Route::post("/nekretnine",[NekretninaController::class,'store']);
Route::put("/nekretnine/{id}",[NekretninaController::class,'update']);
Route::delete("/nekretnine/{id}",[NekretninaController::class,'destroy']);


Route::group(['middleware' => ['auth:sanctum']], function () {

 
    Route::post("/logout",[AutfController::class,'logout']);

});


Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){  



 
    Route::post("/logout",[AutfController::class,'logout']);



});
