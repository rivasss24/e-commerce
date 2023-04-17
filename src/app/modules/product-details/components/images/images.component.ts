import { Component , EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  @Input() images !: string[]

  @Output() changeImage = new EventEmitter<number>();

  pointerEnter(indice:number):void{
    console.log( "src:" , this.images[indice] );
    console.log(indice)
    this.changeImage.emit(indice);
  }
}
