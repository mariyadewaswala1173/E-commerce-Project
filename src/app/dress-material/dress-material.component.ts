import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dress-material',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './dress-material.component.html',
  styleUrl: './dress-material.component.css'
})
export class DressMaterialComponent {
  dressmaterials: any = [{
    id: 1,
    name: "Black cotton printed saree",
    image: "../../assets/images/dress-material-product/dressm1.jpg",
    price: "4,999",
  },
  {
    id: 2,
    name: "Pink handloom printed saree",
    image: "../../assets/images/dress-material-product/dressm2.jpg",
    price: "4,999",
  }, 
  { 
    id: 3,
    name: "Orange plain banarasi saree",
    image: "../../assets/images/dress-material-product/dressm3.jpg",
    price: "4,999",
  },
  {
    id: 4,
    name: "Pink pure silk  printed saree",
    image: "../../assets/images/dress-material-product/dressm4.jpg",
    price: "4,999",
  },
  {
    id: 5,
    name: "Linen hand printed saree",
    image: "../../assets/images/dress-material-product/dressm5.jpg",
    price: "4,999",
  },
  {
    id: 6,
    name: "Black cotton printed saree",
    image: "../../assets/images/dress-material-product/dressm1.jpg",
    price: "4,999",
  },
  {
    id: 7,
    name: "Pink handloom printed saree",
    image: "../../assets/images/dress-material-product/dressm2.jpg",
    price: "4,999",
  },
  {
    id: 8,
    name: "Orange plain banarasi saree",
    image: "../../assets/images/dress-material-product/dressm3.jpg",
    price: "4,999",
  },
  {
    id: 9,
    name: "Pink pure silk  printed saree",
    image: "../../assets/images/dress-material-product/dressm4.jpg",
    price: "4,999",
  },
  {
    id: 10,
    name: "Linen hand printed saree",
    image: "../../assets/images/dress-material-product/dressm5.jpg",
    price: "4,999",
  },
  {
    id: 11,
    name: "Black cotton printed saree",
    image: "../../assets/images/dress-material-product/dressm1.jpg",
    price: "4,999",
  },
  {
    id: 12,
    name: "Pink handloom printed saree",
    image: "../../assets/images/dress-material-product/dressm2.jpg",
    price: "4,999",
  },
  ];
}
