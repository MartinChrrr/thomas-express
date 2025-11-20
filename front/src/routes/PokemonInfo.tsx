import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemon } from "../services/apiPokemon";




export interface Type {
  _id: string;
  name: string;
}

export interface Attack {
  _id: string;
  name: string;
  power?: number;
}

export interface Pokemon {
    _id: string;
    name: string;
    types: Type[];  // refs to Type
    attacks: Attack[];  // refs to Attack
    height?: number;                     // in meters (or chosen unit)
    weight?: number;                     // in kg (or chosen unit)
    description?: string;
    gender: string;
    evolutions: Pokemon[]; // refs to Pokemon
}

function PokemonInfo() {
  const id = useParams().id;
  const [pokemon, setPokemon] = useState<Pokemon>();


  useEffect(()=>{
    loadPokemon(id!)
  },[])

  const loadPokemon = async(id: string) => {
    const res = await getPokemon(id);
    setPokemon(res.data)

  }


  if(pokemon)return <p>{pokemon.name} {pokemon.types.map((t)=> `type: ${t.name}`)} {pokemon.height}</p>
  return (
    <div>
        <p>test params: {id}</p>
    </div>
  )
}

export default PokemonInfo;