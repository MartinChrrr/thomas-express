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


  if(!pokemon)return <p>Error Loading your pokemon</p>
  return (
    <div className="flex flex-col w-2/3 m-auto">
      <table className="table-fixed mt-2">
        <thead className="text-center">Information on: {pokemon.name}</thead>
        <tr>
          <td>Descitption:</td>
          <td>{pokemon.description ? pokemon.description : "No information on this pokemon"}</td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td>{pokemon.gender ? pokemon.gender : "Unknown"}</td>
        </tr>
        <tr>
          <td>Type:</td>
          <td>{pokemon.types.length ===0 ? "Unknown types" : pokemon.types.map((t) => t.name)}</td>
        </tr>
        <tr>
          <td>Height:</td>
          <td>{pokemon.height ? pokemon.height + " cm" : "Unknown"}</td>
        </tr>
        <tr>
          <td>Weight:</td>
          <td>{pokemon.weight ? pokemon.weight + " kg" : "Unknown"}</td>
        </tr>
        
      </table>

      {/* <div className="flex flex-col border-1 border-black">
        <div className="flex flex-row">
          <p>Type: </p>
          <p>{pokemon.types.map((t) => t.name)}</p>
        </div>
      </div> */}
    </div>
  )
}

export default PokemonInfo;