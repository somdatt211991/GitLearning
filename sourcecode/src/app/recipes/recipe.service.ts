import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
       [
         new Ingredient("Bread",1),
         new Ingredient("French Fries",20)
       ] 
    ),
    new Recipe('Another Test Recipe',
      'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient("Bun",2),
        new Ingredient("mushroom",10)
      ])
  ];
  getRecipes(){
    return this.recipes;
  }
}
