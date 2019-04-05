import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() formData = new EventEmitter<{name : string, amount:string}>();

  constructor() { }

  ngOnInit() {
  }
  addIngrident(){
    console.log("Name is ",this.nameInputRef.nativeElement.value);
    this.formData.emit({
      name : this.nameInputRef.nativeElement.value,
      amount : this.amountInputRef.nativeElement.value
    })

  }
}
