import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemon } from "../services/apiPokemon";
import { getAllTypes } from "../services/apiType";
import { getAllAttacks } from "../services/apiAttack";

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


export function PokemonModify(){
    const id = useParams().id;
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [types, setTypes] = useState<Attack[]>([]);
    const [attacks, setAttacks] = useState<Attack[]>([]);
    const [formData, setFormData] = useState<Pokemon | null>(null);


    useEffect(()=>{
        loadPokemon(id!);
        loadTypes();
        loadAttacks();
      },[])
    
    useEffect(() => {
    if (pokemon) {
    setFormData(pokemon);
    }
    }, [pokemon]);
    
    const loadPokemon = async(id: string) => {
        const res = await getPokemon(id);
        setPokemon(res.data)
    
    }

    const loadTypes = async() => {
        const res = await getAllTypes();
        setTypes(res.data);
    }

    const loadAttacks = async() => {
        const res = await getAllAttacks();
        setAttacks(res.data);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
    ...formData!,
    [e.target.name]: e.target.value
    });
    };

    const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
    }
    

    return <form onSubmit={handleSubmit} action="">
        

    </form>

}