import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { BlouseFilterComponent } from '../blouse-filter/blouse-filter.component';

@Component({
  selector: 'app-blouse',
  standalone: true,
  templateUrl: './blouse.component.html',
  styleUrl: './blouse.component.css',
  imports: [NgFor, RouterLink, BlouseFilterComponent]
})
export class BlouseComponent {
  filteredBlouse: any = [];
  blouseService: any = [];
  constructor(private product: ProductService, private route: Router) { }
  ngOnInit(): void {
    this.blouseService = this.product.blouses;
    this.filteredBlouse = this.blouseService;
  }
  applyColorFilter(selectedColors: string) {
    if (selectedColors === "All") {
      this.filteredBlouse = this.blouseService;
    } else {
      this.filteredBlouse = this.blouseService.filter(blouse => selectedColors.includes(blouse.color));
    }
  }
  applyPriceFilter(selectedPrice: string) {
    if (selectedPrice === "All") {
      this.filteredBlouse = this.blouseService;
    } else {
      this.filteredBlouse = this.blouseService.filter(blouse => selectedPrice.includes(blouse.priceRange));
    }
  }
  applyCategoryFilter(selectedCategory: string) {
    if (selectedCategory === "All") {
      this.filteredBlouse = this.blouseService;
    } else {
      this.filteredBlouse = this.blouseService.filter(blouse => selectedCategory.includes(blouse.category));
    }
  }
  applyFabricFilter(selectedFabric: string) {
    if (selectedFabric === "All") {
      this.filteredBlouse = this.blouseService;
    } else {
      this.filteredBlouse = this.blouseService.filter(blouse => selectedFabric.includes(blouse.fabric));
    }
  }

  filterProductsById(id: string) {
    let lowercaseID: string = id.toLowerCase();

    if (lowercaseID) {
      this.filteredBlouse = this.blouseService.filter(blouse => blouse.id == lowercaseID);
    } else {
      this.filteredBlouse = this.blouseService;
    }
  }
  resetFilter(reset: string) {
    if (reset === "clicked") {
      this.filteredBlouse = this.blouseService;
    }
  }
}
