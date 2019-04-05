import { Component, OnInit,Input } from '@angular/core';
import { recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeName = '';
  recipeDesc = '';
  @Input() recipe : recipe;
 
  constructor() { }

  ngOnInit() {
  }
 
}
