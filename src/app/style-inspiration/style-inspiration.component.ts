import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-style-inspiration',
  standalone: true,
  imports: [NgFor,RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './style-inspiration.component.html',
  styleUrl: './style-inspiration.component.css'
})
export class StyleInspirationComponent {
  sarees: any = [{
    id: 1,
    name: "Black cotton printed saree",
    image: "../../assets/images/style-inspiration/saree/saree1.webp",
    price: "4,999",
  },
  {
    id: 2,
    name: "Pink handloom printed saree",
    image: "../../assets/images/style-inspiration/saree/saree2.webp",
    price: "4,999",
  },
  {
    id: 3,
    name: "Orange plain banarasi saree",
    image: "../../assets/images/style-inspiration/saree/saree3.webp",
    price: "4,999",
  },
  {
    id: 4,
    name: "Pink pure silk  printed saree",
    image: "../../assets/images/style-inspiration/saree/saree4.webp",
    price: "4,999",
  }]
  kurtis: any = [{
    id: 1,
    name: "Hand printed classic kurti set",
    image: "../../assets/images/style-inspiration/kurti/kurti1.jpg",
    price: "1,999",
  },
  {
    id: 2,
    name: "Shiffon printed kurti",
    image: "../../assets/images/style-inspiration/kurti/kurti2.jpg",
    price: "2,999",
  },
  {
    id: 3,
    name: "Elegent hand work kurti",
    image: "../../assets/images/style-inspiration/kurti/kurti3.jpg",
    price: "1,599",
  },
  {
    id: 4,
    name: "Kashmiri blue print kurti",
    image: "../../assets/images/style-inspiration/kurti/kurti4.jpg",
    price: "1,799",
  }]
  bags: any = [{
    id: 1,
    name: "Classic hand bags",
    image: "../../assets/images/style-inspiration/bag/bag1.jpg",
    price: "1,999",
  },
  {
    id: 2,
    name: "Classic hand bags",
    image: "../../assets/images/style-inspiration/bag/bag2.jpg",
    price: "2,999",
  },
  {
    id: 3,
    name: "Classic hand bags",
    image: "../../assets/images/style-inspiration/bag/bag3.jpg",
    price: "1,599",
  },
  {
    id: 4,
    name: "Classic hand bags",
    image: "../../assets/images/style-inspiration/bag/bag4.jpg",
    price: "1,799",
  }]
  jwellerys: any = [{
    id: 1,
    name: "Classic jwellery",
    image: "../../assets/images/style-inspiration/jewellery/jwellery1.jpg",
    price: "1,999",
  },
  {
    id: 2,
    name: "Classic jwellery",
    image: "../../assets/images/style-inspiration/jewellery/jwellery2.jpg",
    price: "2,999",
  },
  {
    id: 3,
    name: "Classic jwellery",
    image: "../../assets/images/style-inspiration/jewellery/jwellery3.jpg",
    price: "1,599",
  },
  {
    id: 4,
    name: "Classic jwellery",
    image: "../../assets/images/style-inspiration/jewellery/jwellery4.jpg",
    price: "1,799",
  }]
}
