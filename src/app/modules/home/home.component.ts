import { Component } from '@angular/core';

import { Product } from 'src/app/shared/components/product-card/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';
import { PlacesService } from 'src/app/shared/services/places.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  product: Product[] = [];

  offset: number = 0;

  limit: number = 15;

  constructor(
      private service:ProductsService,
      private places: PlacesService
      ) { }
  
            //void -> funciones que no retornan nada.
  ngOnInit(): void{
  //ngOnInit es el el equivalente a useEffect de react
    console.log("Ejecutado ngOnInit");

    this.service.getPaginatedProducts(this.offset, this.limit).subscribe( data => {
      this.product = data;
    })
    //El subscribe() ejecuta el comportamiento definido una vez, y se puede volver a llamar. Cada suscripción tiene su propia computación.
  }

  moveScroll(scrollProduct:HTMLElement, rigthOrleft:boolean):void{

    let scroll = scrollProduct.scrollLeft ;

    scroll = (rigthOrleft) ? scroll + 500 : scroll - 500;

    scrollProduct.scroll({
      top: 0,
      left: scroll,
      behavior: "smooth"});
  }

  get isUserLocationReady() {
    return this.places.isUserLocationReady;
  }
}
