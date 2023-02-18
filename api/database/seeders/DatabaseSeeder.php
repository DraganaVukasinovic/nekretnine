<?php

namespace Database\Seeders;

use App\Models\Kupovina;
use App\Models\Nekretnina;
use App\Models\Tip;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       
        // Kupovina::truncate();
        // User::truncate();
        // Nekretnina::truncate();
        // Tip::truncate();
        User::factory(10)->create();




        (new TipSeeder())->run();
        (new NekretninaSeeder())->run();
        (new KupovinaSeeder())->run();

    }
}
