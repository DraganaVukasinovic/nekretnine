<?php

namespace App\Http\Resources;

use App\Models\Nekretnina;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class KupovinaResource extends JsonResource
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
            'user_id' =>User::find( $this->user_id),
            'nekretnina_id' => new  NekretninaResource(Nekretnina::find($this->nekretnina_id)),
            'datum_kupovine' => $this->datum_kupovine,
          
        ];
    }
}
