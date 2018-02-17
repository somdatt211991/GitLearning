import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')nameInputRef:ElementRef;
  @ViewChild('amountInput')amountInputRef:ElementRef;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
  }
  onIngredientAdded(){
    console.log(this.amountInputRef);
     const ingName = this.nameInputRef.nativeElement.value;
     const ingAmount = JSON.parse(this.amountInputRef.nativeElement.value);
     const newIngredient = new Ingredient(ingName,ingAmount);
     this.slService.addingredient(newIngredient);
  }
}
