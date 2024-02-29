import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { BagFilterComponent } from '../bag-filter/bag-filter.component';

@Component({
  selector: 'app-bag-product',
  standalone: true,
  imports: [NgFor, BagFilterComponent],
  templateUrl: './bag-product.component.html',
  styleUrl: './bag-product.component.css'
})
export class BagProductComponent implements OnInit {
  // dressmaterials: any = [{
  //   id: 1,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag1.avif",
  //   price: "999",
  // },
  // {
  //   id: 2,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag2.avif",
  //   price: "999",
  // }, 
  // { 
  //   id: 3,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag3.avif",
  //   price: "999",
  // },
  // {
  //   id: 4,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag4.avif",
  //   price: "999",
  // },
  // {
  //   id: 5,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag5.avif",
  //   price: "999",
  // },
  // {
  //   id: 6,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag1.avif",
  //   price: "999",
  // },
  // {
  //   id: 7,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag2.avif",
  //   price: "999",
  // },
  // {
  //   id: 8,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag3.avif",
  //   price: "999",
  // },
  // {
  //   id: 9,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag4.avif",
  //   price: "999",
  // },
  // {
  //   id: 10,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag5.avif",
  //   price: "999",
  // },
  // {
  //   id: 11,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag1.avif",
  //   price: "999",
  // },
  // {
  //   id: 12,
  //   name: "Bag",
  //   image: "../../assets/images/bag-product/bag2.avif",
  //   price: "999",
  // },
  // ];
  filteredBag:any=[];
  bagService:any = [];
  constructor(private product: ProductService, private route: Router) { }
  ngOnInit(): void {
    this.bagService = this.product.bags;
    this.filteredBag = this.bagService;
  }

  applyColorFilter(selectedColors: string) {
    if (selectedColors === "All") {
      this.filteredBag = this.bagService;
    } else {
      this.filteredBag = this.bagService.filter(bag => selectedColors.includes(bag.color));
    }
  }
  applyPriceFilter(selectedPrice: string) {
    if (selectedPrice === "All") {
      this.filteredBag = this.bagService;
    } else {
      this.filteredBag = this.bagService.filter(bag => selectedPrice.includes(bag.priceRange));
    }
  }
  applyCategoryFilter(selectedCategory: string) {
    if (selectedCategory === "All") {
      this.filteredBag = this.bagService;
    } else {
      this.filteredBag = this.bagService.filter(bag => selectedCategory.includes(bag.category));
    }
  }
  applyFabricFilter(selectedFabric: string) {
    if (selectedFabric === "All") {
      this.filteredBag = this.bagService;
    } else {
      this.filteredBag = this.bagService.filter(bag => selectedFabric.includes(bag.fabric));
    }
  }
  
  filterProductsById(id: string) {
    let lowercaseID:string =  id.toLowerCase();

    if (lowercaseID) {
      this.filteredBag = this.bagService.filter(bag => bag.id == lowercaseID);
    } else {
      this.filteredBag = this.bagService;
    }
  }
  resetFilter(reset: string) {
    if (reset === "clicked") {
      this.filteredBag = this.bagService;
    }
  }
}
