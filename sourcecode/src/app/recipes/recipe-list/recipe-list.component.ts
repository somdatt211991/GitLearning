import { RecipeService } from '../recipe.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipe : Recipe;
//  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe:Recipe){   
  //   console.log("receipe came till recipe-list ");    
  //  this.recipeWasSelected.emit(recipe);
  // }
}
