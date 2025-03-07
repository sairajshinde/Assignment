import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ProductListComponent, SearchComponent, FormsModule],
})
export class AppComponent {
  searchQuery: string = ''; // Holds the search query

  // Function to update the search query
  onSearch(query: string): void {
    this.searchQuery = query;
  }
}
