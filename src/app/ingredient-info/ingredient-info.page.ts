import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ingredient-info',
  templateUrl: './ingredient-info.page.html',
  styleUrls: ['./ingredient-info.page.scss'],
})
export class IngredientInfoPage {

 @ViewChild('searchbar', {static: true}) searchbar:  ElementRef | null = null;
  results: string[] = [];
  showResults = false;
  rawIngredients: string[] = [
    'Onion', 'Garlic', 'Potato', 'Cabbage', 'Carrots','Egg', 'Butter'
  ];
  rawCondiments: string[] = [
    'Oyster Sauce', 'Soy Sauce', 'Vinegar', 'Mustard', 'Mayonnaise'
  ];

  selectedIngredients: string[] = [];
  selectedCondiments: string[] = [];

  constructor(private router: Router) {}

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = [...this.rawIngredients.filter((item: string) =>
      item.toLowerCase().includes(query)
    ), ...this.rawCondiments.filter((item: string) =>
    item.toLowerCase().includes(query)
  )];
    this.showResults = true;
  }
  
  selectResult(event: any, result: string) {
    event.stopPropagation();
  }

  addNewRecipe(){
    this.router.navigate(['/home'])
  }
  clickResult(){
    this.router.navigate(['/ingredient-info'])
  }
  gotoSearchbar(){
    this.router.navigate(['/search-bar']) //href
  }
  
}
