import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemon, updatePokemon } from "../services/apiPokemon";
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
    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    ...formData,
    types: formData!.types.map(t => t._id),
    attacks: formData!.attacks.map(a => a._id),
  };

  await updatePokemon(id!, payload);
  };

  const handleTypesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions).map(o => o.value);
    const selectedTypes = types.filter(t => selectedIds.includes(t._id));

    setFormData({
    ...formData!,
    types: selectedTypes
  });};
  const handleAttacksChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions).map(o => o.value);
    const selectedAttacks = attacks.filter(a => selectedIds.includes(a._id));

    setFormData({
      ...formData!,
      attacks: selectedAttacks
  });
};

return (
  <div className="flex justify-center items-center py-10">
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">Modifier un Pokémon</h2>

      {/* Nom */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Nom</label>
        <input
          type="text"
          name="name"
          value={formData?.name ?? ""}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
        />
      </div>

      {/* Types */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Types</label>
        <select
          multiple
          value={formData?.types.map(t => t._id) ?? []}
          onChange={handleTypesChange}
          className="border rounded-lg px-3 py-2 h-32 focus:ring focus:ring-blue-300 outline-none"
        >
          {types.map(type => (
            <option key={type._id} value={type._id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      {/* Attaques */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Attaques</label>
        <select
          multiple
          value={formData?.attacks.map(a => a._id) ?? []}
          onChange={handleAttacksChange}
          className="border rounded-lg px-3 py-2 h-32 focus:ring focus:ring-blue-300 outline-none"
        >
          {attacks.map(a => (
            <option key={a._id} value={a._id}>
              {a.name}
            </option>
          ))}
        </select>
      </div>

      {/* Height */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Taille (m)</label>
        <input
          type="number"
          name="height"
          value={formData?.height ?? ""}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
        />
      </div>

      {/* Weight */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Poids (kg)</label>
        <input
          type="number"
          name="weight"
          value={formData?.weight ?? ""}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData?.description ?? ""}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 h-24 resize-none focus:ring focus:ring-blue-300 outline-none"
        />
      </div>

      {/* Gender */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Genre</label>
        <select
          name="gender"
          value={formData?.gender ?? "unknown"}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Enregistrer les modifications
      </button>
    </form>
  </div>
);



}