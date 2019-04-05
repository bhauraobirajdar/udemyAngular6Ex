import { Component, OnInit } from '@angular/core';

import { Ingredients } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredients[] = [
    new Ingredients("apple",10),
    new Ingredients("mango",20),
  ];
  constructor() { }

  ngOnInit() {
  }

  onFormdata(data : Ingredients){
    this.ingredients.push(new Ingredients(data.name,data.amount));
  }

}
