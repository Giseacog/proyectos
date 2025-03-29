import { Component } from '@angular/core';
import { AddButtonComponent } from "./components/add-button/add-button.component";
import { ImgContainerComponent } from './components/img-container/img-container.component';
import { NewimageFormComponent } from './components/newimage-form/newimage-form.component';
import  { Image } from '../../models/image.model';
import { ImgService } from '../../services/img.service';


@Component({
  selector: 'app-main',
  imports: [AddButtonComponent, ImgContainerComponent, NewimageFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
newImageModalId:number=1; //Las imagenes se numeran desde el 1
imgArray:Image[]=[]; //Array de imagenes
constructor(private imgService:ImgService){ //Inyeccion de uso del servicio

  ngOnInit():void{
    this.imgArray= this.imgService.getImages(); //ontener imagenes del servicio
    // guardala en el arreglo imgArray
  }
}

}
