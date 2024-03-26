import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) =>{
    try {
        // Add recipe to the database
        const createResult = await RecipeModel.create(req.body);
        //Return result
        res.status(201).json(createResult);
    } catch (error) {
        next(error);
    }
};

export const getRecipes = async (req, res, next) =>{
   try {
     // Get all recipes from database
     const findResult = await RecipeModel.find();
     // Return response
     res.status(200).json(findResult);
   } catch (error) {
        next(error);
   }
};  

export const getRecipe = async (req, res, next) =>{
   try {
    //Get single recipe by id
    const findByIdResult = await RecipeModel.findById(req.params.id);
    //Return 404 if no recipe is found
    if (findByIdResult === null) {
        res.status(404).json({
            message:`Recipe with ID: ${req.param.id} not found!`
        });
    } else{
    //Return response
    res.status(200).json(findByIdResult);
   } 
} catch (error) {
        next(error);
    
   }
   
};

export const updateRecipe = (req, res) =>{
    res.send(`Update recipe with id: ${req.params.id}`);
};

export const deleteRecipe = (req, res) => {
    res.send(`delete recipe by id: ${req.params.id}`);
}