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
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2020-01-10'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2018-02-15'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2021-03-20'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2018-04-25'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2022-05-30'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2022-05-30'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2018-05-30'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2022-05-30'],
            ['user_id' => $users->random()->id, 'nekretnina_id' => $nekretnine->random()->id, 'datum_kupovine' => '2022-05-30'],


        ];

        foreach ($kupovine as $kupovina) {
            Kupovina::create($kupovina);
        }
    }
}
