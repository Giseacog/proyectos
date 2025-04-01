import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImgService } from '../../../../services/img.service';
declare var $: any;

@Component({
  selector: 'app-newimage-form', // Unique selector for this component
  templateUrl: './newimage-form.component.html', // Path to the HTML template
  styleUrls: ['./newimage-form.component.css'] // Path to the CSS file
})
export class NewimageFormComponent {
  @Input() modalID!: number;
  imageUrl: string | null = ''; // URL of the image
  imageName: string = '';
  @Output() reloadImg = new EventEmitter<void>();

  constructor(private imgService: ImgService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
        this.imageName = file.name;
      };
      reader.readAsDataURL(file);
    }
  }

  saveImage() { 
    if (!this.imageUrl || !this.imageName) {
      alert('Selecciona una imagen');
      return;
    }
    this.imgService.saveImage(this.imageName, this.imageUrl); // Pass only the required arguments
    this.loadImages();
    this.imageUrl = null;
    this.imageName = '';
  
     $(`#${this.modalID}`).modal('hide'); 
  }

  loadImages() {
    this.reloadImg.emit();
  }
}