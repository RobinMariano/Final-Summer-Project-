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

  async searchRecipes() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.searchResults = []; // Clear the search results when searchTerm is empty or contains only whitespace
    } else {
      this.searchResults = await this.dataService.searchRecipes(this.searchTerm);
    }
  }

  addNewRecipe() {
    this.router.navigate(['/home']);
  }
}
