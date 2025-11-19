import axios from "axios";


const apiAttack = axios.create({
    baseURL: "http://localhost:3000/api",
});


export const getAllAttacks = () => apiAttack.get("/attack"); 
export const getAttack = (id: string) => apiAttack.get(`/attack/${id}`);
export const createAttack= (data: { name: string, primaryType: string[],trainers: string[] }) => apiAttack.post("/attack", data);
export const updateAttack= (id: string, data: { name: string, primaryType: string[],trainers: string[]  }) =>apiAttack.put(`/attack/${id}`, data);
export const deleteAttack= (id: string) => apiAttack.delete(`/attack/${id}`);

export default apiAttack;