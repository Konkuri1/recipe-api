import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res) =>{
    // Add recipe to the database
    const createResult = await RecipeModel.create(req.body);
    //Return result
    res.status(201).json(createResult);
};

export const getRecipes = async (req, res) =>{
    // Get all recipes from database
    const findResult = await RecipeModel.find();
    // Return response
    res.status(200).json(findResult);
};  

export const getRecipe = (req, res) =>{
    res.send(`Get all recipe with id: ${req.params.id}`);
};

export const updateRecipe = (req, res) =>{
    res.send(`Update recipe with id: ${req.params.id}`);
};

export const deleteRecipe = (req, res) => {
    res.send(`delete recipe by id: ${req.params.id}`);
}