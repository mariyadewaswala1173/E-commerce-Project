import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { CategoryDisplayComponent } from '../category-display/category-display.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { StyleInspirationComponent } from '../style-inspiration/style-inspiration.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BannerComponent,CategoryDisplayComponent,TestimonialsComponent,StyleInspirationComponent]
})
export class HomeComponent {

}
