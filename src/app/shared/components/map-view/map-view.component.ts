import { Component, AfterViewInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit{
                                      
  constructor( private placesService: PlacesService ){
  }

  eCommerceLocation = { lat: 10.693981 , lng: -71.636693 };
                                     //{lat: 24, lng: 12};
  center: google.maps.LatLngLiteral = { lat: 10.693981 , lng: -71.636693 }
  
  zoom = 17;
  
  circleCenter: google.maps.LatLngLiteral = this.eCommerceLocation
  
  radius = 30;



  ngAfterViewInit():void{
    console.log( this.placesService.getUserLocation() );
  }
}
