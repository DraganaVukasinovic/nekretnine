<?php

namespace Database\Seeders;

use App\Models\Nekretnina;
use App\Models\Tip;
use Illuminate\Database\Seeder;

class NekretninaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tipovi = Tip::all();

        $nekretnine = [
            ['naziv' => 'Stan u centru grada', 'opis' => 'Prelep stan u centru grada, idealan za mlade parove', 'cena' => 100000, 'tip_id' => 2, 'adresa' => 'Ulica 123', 'broj_soba' => 2, 'broj_kupatila' => 1, 'kvadratura' => 60],
            ['naziv' => 'Kuća na periferiji', 'opis' => 'Prostrana kuća na periferiji grada, idealna za porodicu sa decom', 'cena' => 250000, 'tip_id' => 1, 'adresa' => 'Ulica 456', 'broj_soba' => 4, 'broj_kupatila' => 2, 'kvadratura' => 200],
            ['naziv' => 'Lukuzni penthaus', 'opis' => 'Prelep penthaus sa pogledom na grad', 'cena' => 500000, 'tip_id' => 2, 'adresa' => 'Ulica 789', 'broj_soba' => 3, 'broj_kupatila' => 2, 'kvadratura' => 150],
            ['naziv' => 'Vikendica pored reke', 'opis' => 'Prelepa vikendica pored reke, idealna za opuštanje', 'cena' => 150000, 'tip_id' => 1, 'adresa' => 'Ulica 1011', 'broj_soba' => 2, 'broj_kupatila' => 1, 'kvadratura' => 80],
            ['naziv' => 'Stan u novogradnji', 'opis' => 'Moderan stan u novogradnji', 'cena' => 80000, 'tip_id' => 2, 'adresa' => 'Ulica 1213', 'broj_soba' => 1, 'broj_kupatila' => 1, 'kvadratura' => 40],
            ['naziv' => 'Stan u centru grada2', 'opis' => 'Prelep stan u centru grada, idealan za mlade parove', 'cena' => 120000, 'tip_id' => 2, 'adresa' => 'Ulica 123', 'broj_soba' => 2, 'broj_kupatila' => 1, 'kvadratura' => 60],
            ['naziv' => 'Kuća na periferiji2', 'opis' => 'Prostrana kuća na periferiji grada, idealna za porodicu sa decom', 'cena' => 252000, 'tip_id' => 1, 'adresa' => 'Ulica 4562', 'broj_soba' => 4, 'broj_kupatila' => 2, 'kvadratura' => 200],
            ['naziv' => 'Lukuzni penthaus2', 'opis' => 'Prelep penthaus sa pogledom na grad', 'cena' => 520000, 'tip_id' => 2, 'adresa' => 'Ulica 7892', 'broj_soba' => 3, 'broj_kupatila' => 2, 'kvadratura' => 150],
            ['naziv' => 'Vikendica pored reke2', 'opis' => 'Prelepa vikendica pored reke, idealna za opuštanje', 'cena' => 152000, 'tip_id' => 1, 'adresa' => 'Ulica 10112', 'broj_soba' => 2, 'broj_kupatila' => 1, 'kvadratura' => 80],
            ['naziv' => 'Stan u novogradnji2', 'opis' => 'Moderan stan u novogradnji', 'cena' => 82000, 'tip_id' => 2, 'adresa' => 'Ulica 12132', 'broj_soba' => 1, 'broj_kupatila' => 1, 'kvadratura' => 40],
        
        
        ];

        foreach ($nekretnine as $n) {
            Nekretnina::create($n);
        }
    }
}
