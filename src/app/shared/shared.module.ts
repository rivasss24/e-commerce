import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterLink } from '@angular/router';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    MapViewComponent,
    LoadingComponent,
    ProductsCarouselComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    GoogleMapsModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    LoadingComponent,
    MapViewComponent,
    ProductsCarouselComponent,
    ContactFormComponent
  ]
})
export class SharedModule { }
