import { RecipeService } from './../recipe.service';

import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe : Recipe ;
 ingredients : Ingredient[];
  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
     
  }
  toShoppingList(){
   this.slService.onAddingIngredients(this.recipe.ingredients)
  }

}
