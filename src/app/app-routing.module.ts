import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AllProductsComponent } from './modules/all-products/all-products.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'all-products',
    component: AllProductsComponent
  },
  {
    path:'product-details/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
