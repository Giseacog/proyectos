import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Image } from '../../../../models/image.model';
import { EventEmitter } from '@angular/core';
import { ImgService } from '../../../../services/img.service';



@Component({
  selector: 'app-img-container',
  imports: [],
  templateUrl: './img-container.component.html',
  standalone: true,
  styleUrl: './img-container.component.css'
})
export class ImgContainerComponent {
  @Input() images!:Image[]
  @Output() reloadImgs= new EventEmitter<void>();

  constructor(private imgService:ImgService){

  }
  deleteImage(id:number){
    this.imgService.deleteImageByID(id);
    this.reloadImgs.emit();
  }

}
