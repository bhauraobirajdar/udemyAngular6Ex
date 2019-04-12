import { Component, OnInit, Input, Output } from '@angular/core';

import { RecipeService } from '../../recipes.service';

import {recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : recipe;
  //@Output() recipeDetails = new EventEmitter<{void}>();
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  selectedRecipe(recipeData){
    //this.recipeDetails.emit();
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
