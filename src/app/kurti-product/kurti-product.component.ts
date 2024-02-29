import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kurti-product',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './kurti-product.component.html',
  styleUrl: './kurti-product.component.css'
})
export class KurtiProductComponent implements OnInit {
  // kurtis: any = [{
  //   id: 1,
  //   name: "Hand printed classic kurti set",
  //   image: "../../assets/images/kurti-product/kurti-1.jpg",
  //   price: "1,999",
  // },
  // {
  //   id: 2,
  //   name: "Shiffon printed kurti",
  //   image: "../../assets/images/kurti-product/kurti-2.jpg",
  //   price: "2,999",
  // }, 
  // { 
  //   id: 3,
  //   name: "Elegent hand work kurti",
  //   image: "../../assets/images/kurti-product/kurti-3.jpg",
  //   price: "1,599",
  // },
  // {
  //   id: 4,
  //   name: "Kashmiri blue print kurti",
  //   image: "../../assets/images/kurti-product/kurti-4.jpg",
  //   price: "1,799",
  // },
  // {
  //   id: 5,
  //   name: "Blue linen printed kurti",
  //   image: "../../assets/images/kurti-product/kurti-5.jpg",
  //   price: "999",
  // },
  // {
  //   id: 6,
  //   name: "Hand printed classic kurti set",
  //   image: "../../assets/images/kurti-product/kurti-1.jpg",
  //   price: "899",
  // },
  // {
  //   id: 7,
  //   name: "Shiffon printed kurti",
  //   image: "../../assets/images/kurti-product/kurti-2.jpg",
  //   price: "1,979",
  // },
  // {
  //   id: 8,
  //   name: "Elegent hand work kurti",
  //   image: "../../assets/images/kurti-product/kurti-3.jpg",
  //   price: "1,699",
  // },
  // {
  //   id: 9,
  //   name: "Kashmiri blue print kurti",
  //   image: "../../assets/images/kurti-product/kurti-4.jpg",
  //   price: "1,399",
  // },
  // {
  //   id: 10,
  //   name: "Blue linen printed kurti",
  //   image: "../../assets/images/kurti-product/kurti-5.jpg",
  //   price: "1,299",
  // },
  // {
  //   id: 11,
  //   name: "Hand printed classic kurti set",
  //   image: "../../assets/images/kurti-product/kurti-1.jpg",
  //   price: "1,699",
  // },
  // {
  //   id: 12,
  //   name: "Shiffon printed kurti",
  //   image: "../../assets/images/kurti-product/kurti-2.jpg",
  //   price: "1,099",
  // },
  // ];
  serviceKurtis: any = []
  constructor(private product: ProductService, private route: Router) { }
  filteredKurtis: any = []

  ngOnInit(): void {
    this.serviceKurtis = this.product.kurtis;
  }
  filterByColor(selectedColors: string) {
    if (selectedColors === 'All') {
      this.filteredKurtis = this.serviceKurtis;
    } else {
      this.filteredKurtis = this.serviceKurtis.filter(kurti => kurti.color === selectedColors);
    }
  }
}
