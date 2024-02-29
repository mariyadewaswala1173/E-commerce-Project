import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-saree-filter',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() colorChange = new EventEmitter<string>();
  @Output() priceChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();
  @Output() fabricChange = new EventEmitter<string>();
  @Output() resetbutton = new EventEmitter<string>();
  @Output() filterById = new EventEmitter<string>();

  filterByColor(color: string) {
    this.colorChange.emit(color);
  }
  filterByPrice(priceRange: string){
    this.priceChange.emit(priceRange);
  }
  filterByCategory(category: string){
    this.categoryChange.emit(category);
  }
  filterByFabric(fabric: string){
    this.fabricChange.emit(fabric);
  }
  resetFilter(reset: string){
    this.resetbutton.emit(reset);
  }
  applyFilter(id: string) {
    this.filterById.emit(id);
  }
}
