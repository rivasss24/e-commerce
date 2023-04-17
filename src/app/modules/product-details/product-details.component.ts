import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product, ProductDetails } from 'src/app/shared/components/product-card/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  //id !: string

  product !: ProductDetails

  productsByCategory !: Product[]

  indice : number = 0
  
  constructor(
    private route: ActivatedRoute,
    private service:ProductsService
    ) {}

  ngOnInit():void {

    window.scroll(0,0);

    this.route.paramMap.subscribe( (paramMap:any) => {
    const { id } = paramMap.params;
      console.log(typeof(id));
  
    this.service.getProducDetail(id).subscribe( data => {
      this.product = data
      
      this.service.getProductsByCategory( data.category.id ).subscribe( data => {
        this.productsByCategory = data
        console.log(data);
      });

    })

    /*

    */

  });

  }

  get priceBs():string{
    const price = this.product.price * 25;
    return price.toLocaleString('es')
  }
}
