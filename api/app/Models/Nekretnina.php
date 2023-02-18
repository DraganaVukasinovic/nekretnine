<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nekretnina extends Model
{
    use HasFactory;


    protected $table = 'nekretninas';

    protected $fillable = [
        'naziv',
        'opis',
        'adresa', 
        'cena',
        'broj_soba',
        'broj_kupatila',
        'kvadratura',
        'tip_id'
    ];


    public function tip()
    {
        return $this->belongsTo(Tip::class);
    }





}
