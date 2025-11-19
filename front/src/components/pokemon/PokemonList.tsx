// export enum Gender {
//   MALE,
//   FEMALE,
//   GENDERLESS,
//   UNKNOWN ,
// }

import PokemonItem from "./PokemonItem";

export interface Pokemon {
    _id: string;
    name: string;
    types: string    // refs to Type
    attacks: string;  // refs to Attack
    height?: number;                     // in meters (or chosen unit)
    weight?: number;                     // in kg (or chosen unit)
    description?: string;
//   gender: Gender;
  evolutions: string; // refs to Pokemon
}

interface PokemonListProps {
    pokemons: Pokemon[];
    onSee: (id: string) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}




function PokemonList({pokemons, onSee, onEdit, onDelete} : PokemonListProps) {


  return (
    <div className="flex flex-col gap-2 w-full p-5">
        {pokemons.map((pokemon) => (
            <PokemonItem key={pokemon._id} pokemon={pokemon} onSee={onSee} onEdit={onEdit} onDelete={onDelete}/>
        ))}
    </div>
  )
}

export default PokemonList;