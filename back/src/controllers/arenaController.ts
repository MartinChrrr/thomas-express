import { Request, Response } from "express";
import ArenaModel from "../models/arena";

export async function Create(req: Request, res: Response) {
    try {
        const name = req.body.name;
        const primaryType = req.body.primaryType;
        const trainers = req.body.trainers;
        const newArena = await ArenaModel.create({name, primaryType, trainers});
        res.status(201).json(newArena);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function ReadFromId(req: Request, res: Response) {
    try {
        const arena = await ArenaModel.findById(req.params.id)
        .populate("primaryType")
        .populate("trainers");
        res.status(200).json(arena);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
  

}

export async function ReadAll(req: Request, res: Response) {
    try {
        const arenas = await ArenaModel.find();
        res.status(200).json(arenas);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function UpdateFromId(req: Request, res: Response) {
    try {
        const arena = await ArenaModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(204).json(arena);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}




export async function DeleteFromId(req: Request, res: Response) {
    try {
        const arena = await ArenaModel.findByIdAndDelete(req.params.id);
        res.status(204).json(arena);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}