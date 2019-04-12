import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipeItem : recipe;
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    console.log(this.selectedRecipeItem);
    this.recipeService.selectedRecipe
      .subscribe(
        (recipeData : recipe) => {
          console.log("Recipe itemmmm ");
          console.log(recipeData);
          this.selectedRecipeItem = recipeData;
        }
      )
  }

  // selectedRecipe(data){
  //   this.selectedRecipeItem = data;
  //   console.log("Data isssss ",data );
  // }

}
