import { useEffect, useState } from 'react'

import './App.css'
import { deletePokemon, getAllPokemons } from './services/apiPokemon'
import PokemonList from './components/pokemon/PokemonList'
import { Spinner } from './components/ui/spinner';

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

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true)
  const handleDelete = async(id:string ) => {
    await deletePokemon(id);
    loadPokemon();
  }
  const handleEdit = async(id:string ) => {
    //await deletePokemon(id);
  }
  const handleSeeMore = async(id:string ) => {
    //await deletePokemon(id);
  }
  const loadPokemon = async() => {
    const res = await getAllPokemons();
    setPokemons(res.data);
    setLoading(false);
  }
  
  useEffect(()=> {
    loadPokemon();
  })

  if (loading) {
    return <div className='w-full h-full'>
        <Spinner className='size-8 m-auto'/>
      </div>
  }
  return (
    <div>
      <p>app</p>
      <PokemonList pokemons={pokemons} onSee={handleSeeMore} onDelete={handleDelete} onEdit={handleEdit}/>
    </div>
  )
}

export default App
