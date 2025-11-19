import { Request, Response } from "express";
import TypeModel from "../models/type"

export async function Create(req: Request, res: Response) {
    try {
        const name = req.body.name;
        const weaknesses = req.body.weaknesses;
        const resistances = req.body.resistances;
        const newType = await TypeModel.create({name, weaknesses, resistances});
        res.status(201).json(newType);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function ReadFromId(req: Request, res: Response) {
    try {
        const type = await TypeModel.findById(req.params.id);
        res.status(200).json(type);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
  

}

export async function ReadAll(req: Request, res: Response) {
    try {
        const types = await TypeModel.find();
        res.status(200).json(types);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function UpdateFromId(req: Request, res: Response) {
    try {
        const type = await TypeModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(204).json(type);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}




export async function DeleteFromId(req: Request, res: Response) {
    try {
        const type = await TypeModel.findByIdAndDelete(req.params.id);
        res.status(204).json(type);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}