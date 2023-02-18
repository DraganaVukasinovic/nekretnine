<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kupovina extends Model
{
    use HasFactory;

    protected $table = 'kupovinas';

    protected $fillable = [
        'user_id',
        'nekretnina_id',
        'datum_kupovine'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function nekretnina()
    {
        return $this->belongsTo(Nekretnina::class);
    }
}
