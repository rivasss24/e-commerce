import { Component } from '@angular/core';
import { Category, Product } from 'src/app/shared/components/product-card/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  
  constructor(private service:ProductsService){
  }

  allProducts: Product[] = [];

  categories: Category[] = [];

  ngOnInit(): void{

    window.scroll(0,0);

    this.service.getAllproducts().subscribe( data => {
      this.allProducts = data;
    });

    this.service.getCategories().subscribe( data => {
      console.log(data);
      this.categories = data
    })
  }
}
