import axios from "axios";


const apiArena = axios.create({
    baseURL: "http://localhost:3000/api",
});

export const getAllArenas = () => apiArena.get("/arena"); 
export const getArena = (id: string) => apiArena.get(`/arena/${id}`);
export const createArena = (data: { name: string, primaryType: string[],trainers: string[] }) => apiArena.post("/arena", data);
export const updateArena = (id: string, data: { name: string, primaryType: string[],trainers: string[]  }) =>apiArena.put(`/arena/${id}`, data);
export const deleteArena = (id: string) => apiArena.delete(`/arena/${id}`);

export default apiArena;