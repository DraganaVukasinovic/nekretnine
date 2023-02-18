<?php

namespace Database\Seeders;

use App\Models\Kupovina;
use App\Models\Nekretnina;
use App\Models\User;
use Illuminate\Database\Seeder;

class KupovinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();
        $nekretnine = Nekretnina::all();

        $kupovine = [
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2022-01-10'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2022-02-15'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2022-03-20'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2022-04-25'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2022-05-30'],
        ];

        foreach ($kupovine as $kupovina) {
            Kupovina::create($kupovina);
        }
    }
}
