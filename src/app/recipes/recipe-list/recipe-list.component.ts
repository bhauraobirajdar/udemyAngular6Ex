import { Component, OnInit } from '@angular/core';

import { recipe } from './recipe.model';

import { RecipeService } from '../recipes.service'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() selectedRecipeEmit = new EventEmitter<recipe>();
  recipes : recipe[];
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    console.log("tttttttttttttttt")
    this.recipes = this.recipeService.getRecipes();
  }

  selectedRecipe(recipeData : recipe){
    console.log("selectedRecipeEmit called");
    console.log(recipeData);
    
    //this.selectedRecipeEmit.emit(recipeData)
  }

}
