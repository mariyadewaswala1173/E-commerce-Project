import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-category-display',
  standalone: true,
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './category-display.component.html',
  styleUrl: './category-display.component.css'
})
export class CategoryDisplayComponent {}
  //  swiper:any = new Swiper('.swiper', {
    // Default parameters
    // slidesPerView: 1,
    // spaceBetween: 10,
    // Responsive breakpoints
    // breakpoints: {
      // when window width is >= 320px
      // 320: {
        // slidesPerView: 2,
        // spaceBetween: 20
      // },
      // when window width is >= 480px
      // 480: {
        // slidesPerView: 3,
        // spaceBetween: 30
      // },
      // when window width is >= 640px
      // 640: {
        // slidesPerView: 4,
        // spaceBetween: 40
      // }
    // }
  // })
