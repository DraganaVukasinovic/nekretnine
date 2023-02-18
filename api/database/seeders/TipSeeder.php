<?php

namespace Database\Seeders;

use App\Models\Tip;
use Illuminate\Database\Seeder;

class TipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $tipovi = [
            ['naziv' => 'Kuca'],
            ['naziv' => 'Stan'],
            ['naziv' => 'Vikendica'],
            ['naziv' => 'Poslovni prostor'],
            ['naziv' => 'Garaza']
        ];

        foreach ($tipovi as $tip) {
            Tip::create($tip);
        }
    }
}
