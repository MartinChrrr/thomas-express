import axios from "axios";


const apiTrainer = axios.create({
    baseURL: "http://localhost:3000/api",
});

export const getAllTrainers = () => apiTrainer.get("/trainer"); 
export const getTrainer = (id: string) => apiTrainer.get(`/trainer/${id}`);
export const createTrainer = (data: { name: string, primaryType: string[],trainers: string[] }) => apiTrainer.post("/trainer", data);
export const updateTrainer = (id: string, data: { name: string, primaryType: string[],trainers: string[]  }) =>apiTrainer.put(`/trainer/${id}`, data);
export const deleteTrainer = (id: string) => apiTrainer.delete(`/trainer/${id}`);

export default apiTrainer;