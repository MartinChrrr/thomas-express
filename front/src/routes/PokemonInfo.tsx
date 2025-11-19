import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemon } from "../services/apiPokemon";
import { getType } from "../services/apiType";


export interface Pokemon {
    _id: string;
    name: string;
    types: string;  // refs to Type
    attacks: string;  // refs to Attack
    height?: number;                     // in meters (or chosen unit)
    weight?: number;                     // in kg (or chosen unit)
    description?: string;
    gender: string;
    evolutions: string; // refs to Pokemon
}
export interface Attack {
  name: string;
  type: string;
  power?: number;
  accuracy?: number;
  description?: string;
}
interface TypesPo{
  _id: string;
  name: string;
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


  if(pokemon)return <p>{pokemon.name} {pokemon.attacks} {pokemon.height}</p>
  return (
    <div>
        <p>test params: {id}</p>
    </div>
  )
}

export default PokemonInfo;