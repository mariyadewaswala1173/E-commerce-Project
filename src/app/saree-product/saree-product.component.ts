import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FilterComponent } from '../saree-filter/filter.component';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-saree-product',
  standalone: true,
  imports: [NgFor, FilterComponent, RouterLink, CartComponent],
  templateUrl: './saree-product.component.html',
  styleUrl: './saree-product.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SareeProductComponent implements OnInit {

  constructor(private product: ProductService, private route: Router) { }

  filteredSarees: any[] = [];
  sareeService: any = [];

  ngOnInit(): void {
    this.sareeService = this.product.sarees;
    // Initialize sarees
    this.filteredSarees = this.sareeService;
  }
  // cart = this.product.addToCart;

  // addToCart(product: any) {
  //   this.sareeService.addToCart(product); // Call addToCart method from CartService
  // }

  applyColorFilter(selectedColors: string) {
    if (selectedColors === "All") {
      this.filteredSarees = this.sareeService;
    } else {
      this.filteredSarees = this.sareeService.filter(saree => selectedColors.includes(saree.color));
    }
  }
  applyPriceFilter(selectedPrice: string) {
    if (selectedPrice === "All") {
      this.filteredSarees = this.sareeService;
    } else {
      this.filteredSarees = this.sareeService.filter(saree => selectedPrice.includes(saree.priceRange));
    }
  }
  applyCategoryFilter(selectedCategory: string) {
    if (selectedCategory === "All") {
      this.filteredSarees = this.sareeService;
    } else {
      this.filteredSarees = this.sareeService.filter(saree => selectedCategory.includes(saree.category));
    }
  }
  applyFabricFilter(selectedFabric: string) {
    if (selectedFabric === "All") {
      this.filteredSarees = this.sareeService;
    } else {
      this.filteredSarees = this.sareeService.filter(saree => selectedFabric.includes(saree.fabric));
    }
  }
  resetFilter(reset: string) {
    if (reset === "clicked") {
      this.filteredSarees = this.sareeService;
    }
  }
  filterSareesById(id: string) {
    let lowercaseID = id.toLowerCase();
    if (lowercaseID) {
      this.filteredSarees = this.sareeService.filter(saree => saree.id == lowercaseID);
    } else {
      this.filteredSarees = this.sareeService;
    }
  }

}
