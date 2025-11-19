import axios from "axios";


const apiPokemon = axios.create({
    baseURL: "http://localhost:3000/api",
});

export const getAllPokemons = () => apiPokemon.get("/pokemon"); 
export const getPokemon = (id: string) => apiPokemon.get(`/pokemon/${id}`);
export const createPokemon = (data: { name: string, primaryType: string[],trainers: string[] }) => apiPokemon.post("/pokemon", data);
export const updatePokemon = (id: string, data: { name: string, primaryType: string[],trainers: string[]  }) =>apiPokemon.put(`/pokemon/${id}`, data);
export const deletePokemon = (id: string) => apiPokemon.delete(`/pokemon/${id}`);

export default apiPokemon;