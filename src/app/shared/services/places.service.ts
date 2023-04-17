import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlacesService {

  public userLocation !: { lat: number, lng: number } // | undefined;

  //Podriamos tener una variable "isLoading", pero por ahora usaremos el getter

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor() { 
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<{ lat: number,lng: number }> {
    return new Promise( ( resolve, reject )=> {
      navigator.geolocation.getCurrentPosition(
        //otro argumento es el timestamp
        ({ coords }) => {
          //this.userLocation = [ coords.longitude , coords.latitude];
          this.userLocation = {
            lat: coords.latitude, 
            lng: coords.longitude
          };
          console.log("Se econtro localizacion");
          resolve( this.userLocation );
        },
        ( err ) => {
          alert("No se pudo obtener la geolocalización");
          console.log( err );
          reject();
        }
      )
    });
  }

}
