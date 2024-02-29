import { AfterViewInit, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    CarouselModule,
    NgFor
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements AfterViewInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      940: {
        items: 1
      },
      1300: {
        items: 1
      }
    },
    nav: true
  }
  constructor() { }
  ngOnInit(): void { }
  ngAfterViewInit() {

  }

  banner: any = [
    { img: "../../assets/images/banner-slider/img1.jpg" },
    { img: "../../assets/images/banner-slider/img2.jpg" },
    { img: "../../assets/images/banner-slider/img3.jpg" },
    { img: "../../assets/images/banner-slider/img4.jpg" },
    { img: "../../assets/images/banner-slider/img5.jpg" },
  ]
}
