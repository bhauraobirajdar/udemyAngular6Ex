import { recipe } from './recipe-list/recipe.model';

import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class RecipeService{

    selectedRecipe = new EventEmitter<recipe>();
    recipes : recipe[]= [
        new recipe('A Test Recipe','Test Recipe Desc','https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg'),
        new recipe('A Test Recipe','Test Recipe Desc','https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg')
    
      ]

      getRecipes(){
          return this.recipes.slice();
      }
}