import axios from "axios";


const apiType = axios.create({
    baseURL: "http://localhost:3000/api",
});



export const getAllTypes = () => apiType.get("/type"); 
export const getType = (id: string) => apiType.get(`/type/${id}`);
export const createType = (data: { name: string, primaryType: string[],trainers: string[] }) => apiType.post("/type", data);
export const updateType = (id: string, data: { name: string, primaryType: string[],trainers: string[]  }) =>apiType.put(`/type/${id}`, data);
export const deleteType = (id: string) => apiType.delete(`/type/${id}`);

export default apiType;