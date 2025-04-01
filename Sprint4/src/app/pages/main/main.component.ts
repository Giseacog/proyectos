import { Component } from '@angular/core';
import { ImgService } from '../../services/img.service';
import { Image } from '../../models/image.model';
import { ImgContainerComponent } from './components/img-container/img-container.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { NewimageFormComponent } from './components/newimage-form/newimage-form.component';

@Component({
  selector: 'app-main', // Unique selector for this component
  templateUrl: './main.component.html', // Path to the HTML template
  styleUrls: ['./main.component.css'], // Path to the CSS file
  imports: [ImgContainerComponent, AddButtonComponent, NewimageFormComponent],
})
export class MainComponent {
  newImageModalID: number = 1; // Images are numbered starting from 1
  imgArray: Image[] = []; // Array of images

  constructor(private imgService: ImgService) {} // Injects the ImgService

  ngOnInit(): void {
    this.imgArray = this.imgService.getImages();
  }
}
