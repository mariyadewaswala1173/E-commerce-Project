import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  
}
