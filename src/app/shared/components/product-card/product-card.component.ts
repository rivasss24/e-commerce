import { Component,Input } from '@angular/core';
import { Product } from "./models/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product !: Product

  @Input() lazy : boolean = false;
  
  /*
  constructor() { 
    this.product.title = 27<this.product.title.length ? this.recortar(this.product.title,27) : this.product.title; 
  }

  recortar( str:string , longitud:number ):string{
    return `${str.slice( 0, longitud )}...`;
  }*/


}
