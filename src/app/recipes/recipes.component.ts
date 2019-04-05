import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipeItem : recipe;
  constructor() { }

  ngOnInit() {
  }

  // selectedRecipe(data){
  //   this.selectedRecipeItem = data;
  //   console.log("Data isssss ",data );
  // }

}
