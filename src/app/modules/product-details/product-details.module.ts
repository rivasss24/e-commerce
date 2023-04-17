import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ImagesComponent } from './components/images/images.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ImagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ImagesComponent
  ]
})
export class ProductDetailsModule { }
