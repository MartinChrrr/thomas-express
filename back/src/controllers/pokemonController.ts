import { Request, Response } from "express";
import PokemonModel from "../models/pokemon";

export async function Create(req: Request, res: Response) {
    try {
        const name = req.body.name;
        const types = req.body.types;
        const attacks = req.body.attacks;
        const height = req.body.height;
        const weight = req.body.weight;
        const description = req.body.description;
        const gender = req.body.gender;
        const evolutions = req.body.evolutions;
        const newPokemon = await PokemonModel.create({name, types, attacks, height, weight, description, gender, evolutions});
        res.status(201).json(newPokemon);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function ReadFromId(req: Request, res: Response) {
    try {
        const pokemon = await PokemonModel.findById(req.params.id)
        .populate("types")
        .populate("attacks")
        .populate("evolutions");
        res.status(200).json(pokemon);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
  

}

export async function ReadAll(req: Request, res: Response) {
    try {
        const pokemons = await PokemonModel.find()       
        .populate("types")
        .populate("attacks")
        .populate("evolutions");
        res.status(200).json(pokemons);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}

export async function UpdateFromId(req: Request, res: Response) {
    try {
        const pokemon = await PokemonModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(204).json(pokemon);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}




export async function DeleteFromId(req: Request, res: Response) {
    try {
        const pokemon = await PokemonModel.findByIdAndDelete(req.params.id);
        res.status(204).json(pokemon);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
    }
}