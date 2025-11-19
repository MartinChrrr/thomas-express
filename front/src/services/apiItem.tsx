import axios from "axios";


const apiItem = axios.create({
    baseURL: "http://localhost:3000/api",
});


export const getAllItems = () => apiItem.get("/item"); 
export const getItem = (id: string) => apiItem.get(`/item/${id}`);
export const createItem= (data: { name: string, primaryType: string[],trainers: string[] }) => apiItem.post("/item", data);
export const updateItem= (id: string, data: { name: string, primaryType: string[],trainers: string[]  }) =>apiItem.put(`/item/${id}`, data);
export const deleteItem= (id: string) => apiItem.delete(`/item/${id}`);

export default apiItem;