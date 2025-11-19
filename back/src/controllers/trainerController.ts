import { Request, Response } from "express";
import TrainerModel from "../models/trainer"

    // name: { type: String, required: true, trim: true },
    // activePokemons: [{ type: Schema.Types.ObjectId, ref: "Pokemon" }],
    // capturedPokemons: [{ type: Schema.Types.ObjectId, ref: "Pokemon" }],
    // items: [{ type: Schema.Types.ObjectId, ref: "Item" }],

export async function Create(req: Request, res: Response) {
    try {
        const name = req.body.name;
        const activePokemons = req.body.activePokemons;
        const capturedPokemons = req.body.capturedPokemons;
        const items = req.body.items;
        const newTrainer = await TrainerModel.create({name, activePokemons, capturedPokemons, items});
        res.status(201).json(newTrainer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function ReadFromId(req: Request, res: Response) {
    try {
        const trainer = await TrainerModel.findById(req.params.id);
        res.status(200).json(trainer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
  

}

export async function ReadAll(req: Request, res: Response) {
    try {
        const trainers = await TrainerModel.find();
        res.status(200).json(trainers);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function UpdateFromId(req: Request, res: Response) {
    try {
        const trainer = await TrainerModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(204).json(trainer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}




export async function DeleteFromId(req: Request, res: Response) {
    try {
        const trainer = await TrainerModel.findByIdAndDelete(req.params.id);
        res.status(204).json(trainer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}