import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }
 
  registerRecipe(recipeData: any) {
    const recipesRef = collection(this.firestore, 'recipes'); // Assuming 'recipes' is the name of the collection in Firestore
    return addDoc(recipesRef, recipeData);
  }

  async searchRecipes(searchTerm: string): Promise<any[]> {
    console.log('Search term:', searchTerm);
  
    const ingredients = searchTerm.toLowerCase().split(',').map(ingredient => ingredient.trim());
  
    const recipesRef = collection(this.firestore, 'recipes');
    const querySnapshot = await getDocs(recipesRef);
    const results: any[] = [];
  
    querySnapshot.forEach(doc => {
      const recipeIngredients = doc.data()['ingredients'].map((ingredient: string) => ingredient.toLowerCase());
      const hasAllIngredients = ingredients.every(ingredient => recipeIngredients.includes(ingredient));
      
      if (hasAllIngredients) {
        const recipeData = {
          recipeName: doc.data()['recipeName'],
          // Include other desired properties from doc.data() here
        };
        results.push(recipeData);
      }
    });
  
    console.log('Search results:', results);
    return results;
  }
}
