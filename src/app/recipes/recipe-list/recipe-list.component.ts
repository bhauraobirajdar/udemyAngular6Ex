import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { recipe } from './recipe.model';

import { RecipeServie } from '../recipes.service'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeEmit = new EventEmitter<recipe>();
  recipes : recipe[]= [
    new recipe('A Test Recipe','Test Recipe Desc','https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg'),
    new recipe('A Test Recipe','Test Recipe Desc','https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg')

  ]
  constructor() { }

  ngOnInit() {
  }

  selectedRecipe(recipeData : recipe){
    console.log("selectedRecipeEmit called");
    console.log(recipeData);
    
    this.selectedRecipeEmit.emit(recipeData)
  }

}
