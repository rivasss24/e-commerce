import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ],
  exports: [
    AllProductsComponent
  ]
})
export class AllProductsModule { }
