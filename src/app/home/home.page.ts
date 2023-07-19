import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild('fileInput') fileInput!: ElementRef;

  selectedIngredients: string[] = [];
  selectedQuantities: { [key: string]: string } = {};
  selectedMeasurements: { [key: string]: string } = {};

  recipeName: string = '';
  description: string = '';
  cookingProcedure: string = '';
  newIngredient: string = '';

  recipe = {
    recipeName: '',
    description: '',
    ingredientAdded: '',
    cookingProcedure: '',
    imageFile: null
  };

  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  onSubmit() {
    const recipeData = {
      recipeName: this.recipeName.toLowerCase(),
      description: this.description,
      ingredients: this.selectedIngredients.map(ingredient => ingredient.toLowerCase()),
      cookingProcedure: this.cookingProcedure,
      Qty: this.selectedQuantities,
      Unit: this.selectedMeasurements,
      imageFile: this.recipe.imageFile
    };

    this.dataService.registerRecipe(recipeData)
      .then(() => {
        console.log('Recipe registered successfully!');
      })
      .catch(error => {
        console.error('Error registering recipe:', error);
      });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
  }

  addIngredient() {
    const ingredient = this.newIngredient.trim();

    if (ingredient && !this.selectedIngredients.includes(ingredient)) {
      this.selectedIngredients.push(ingredient);
    }

    this.newIngredient = '';
  }

  deleteIngredient(ingredient: string) {
    const index = this.selectedIngredients.indexOf(ingredient);
    if (index > -1) {
      this.selectedIngredients.splice(index, 1);
      this.selectedQuantities[ingredient] = '';
      this.selectedMeasurements[ingredient] = '';
    }
  }

  adjustTextareaHeight(event: any) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  gotoSearchbar() {
    this.router.navigate(['/search-bar']);
  }

  validateQuantity(event: any, ingredient: string) {
    const input = event.target.value;
    if (input && input.length > 3) {
      event.target.value = input.slice(0, 3);
      this.selectedQuantities[ingredient] = event.target.value;
    }
  }

  async saveRecipe(recipeData: any) {
    try {
      // Save recipe logic
      console.log('Recipe saved successfully!');
    } catch (error) {
      console.error('Error saving recipe:', error);
    }
  }
  
  clearInputs() {
    // Clear all input variables here
    this.recipeName = '';
    this.description = '';
    this.cookingProcedure = '';
    this.newIngredient = '';
    this.selectedIngredients = [];
    this.selectedQuantities = {};
    this.selectedMeasurements = {};
  }
}
