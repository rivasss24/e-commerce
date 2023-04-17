import { Component,Input } from '@angular/core';
import { Product } from '../product-card/models/product.model';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css']
})
export class ProductsCarouselComponent {

  @Input() product : Product[] = []
  
  moveScroll(scrollProduct:HTMLElement, rigthOrleft:boolean):void{

    let scroll = scrollProduct.scrollLeft ;

    scroll = (rigthOrleft) ? scroll + 500 : scroll - 500;

    scrollProduct.scroll({
      top: 0,
      left: scroll,
      behavior: "smooth"});
  }

}
