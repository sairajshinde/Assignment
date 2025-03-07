import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class SearchComponent {
  searchQuery: string = '';

  @Output() searchQueryChanged = new EventEmitter<string>();

  onSearch(): void {
    this.searchQueryChanged.emit(this.searchQuery);
  }

  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
}
