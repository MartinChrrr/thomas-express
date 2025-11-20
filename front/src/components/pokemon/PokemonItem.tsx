import Pokemon from "../../routes/PokemonInfo";
import { Link } from "react-router";
import { Button } from "../ui/button";

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

interface PokemonItemProps {
    pokemon: Pokemon;
    onSee: (id: string) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

function PokemonItem({pokemon, onSee, onEdit, onDelete} : PokemonItemProps) {


  return (
    <div className="flex flex-row w-full gap-4">
        <h3 className="flex-3">{pokemon.name}</h3>
        <Link to={{pathname: `/pokemonInfo/${pokemon._id}`}} 
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
        bg-blue-500 h-9 px-4 py-2  text-white hover:bg-blue-400 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60">
          Voir Plus</Link>
       
        <Button variant="destructive" onClick={() => onDelete(pokemon._id)}>Supprimer</Button>
        <Link to={{pathname: `/pokemonModify/${pokemon._id}`}} 
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
        bg-yellow-500 h-9 px-4 py-2  text-white hover:bg-yellow-400 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60">
          Modifier</Link>
        
    </div>
  )
}

export default PokemonItem;