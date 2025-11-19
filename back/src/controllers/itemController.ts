import { Request, Response } from "express";
import ItemModel from "../models/item";

export async function Create(req: Request, res: Response) {
    try {
        const name = req.body.name;
        const categories = req.body.categories;
        const description = req.body.description;
        const newItem = await ItemModel.create({name, categories, description});
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function ReadFromId(req: Request, res: Response) {
    try {
        const item = await ItemModel.findById(req.params.id);
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
  

}

export async function ReadAll(req: Request, res: Response) {
    try {
        const items = await ItemModel.find();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function UpdateFromId(req: Request, res: Response) {
    try {
        const item = await ItemModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(204).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}




export async function DeleteFromId(req: Request, res: Response) {
    try {
        const arena = await ItemModel.findByIdAndDelete(req.params.id);
        res.status(204).json(arena);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}