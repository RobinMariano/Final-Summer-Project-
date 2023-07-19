import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage {

  searchTerm: string = '';
  searchResults: any[] = [];


  constructor(private router: Router, private dataService: DataService) {}

  searchRecipes() {
    this.dataService.searchRecipes(this.searchTerm)
      .then((results: any[]) => {
        this.searchResults = results;
      })
      .catch((error: any) => {
        console.error('Error searching recipes:', error);
      });
  }

  addNewRecipe() {
    this.router.navigate(['/home']);
  }
}
