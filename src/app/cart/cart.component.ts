import { Component , OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  {
  // cart:any =[];

  // constructor(private productService: ProductService, private route:Router) {}
  // ngOnInit(): void {
  //   this.cart = this.productService.addToCart;
  // }
}
