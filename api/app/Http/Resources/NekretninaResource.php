<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NekretninaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'naziv' => $this->naziv,
            'opis' => $this->opis,
            'cena' => $this->cena,
            'tip' => $this->tip->naziv,
            'adresa' => $this->adresa,
            'broj_soba' => $this->broj_soba,
            'broj_kupatila' => $this->broj_kupatila,
            'kvadratura' => $this->kvadratura,
 
        ];
    }
}
