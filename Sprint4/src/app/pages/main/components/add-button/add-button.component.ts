import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImgService } from '../../../../services/img.service';

@Component({
  selector: 'app-add-button',
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css',
})
export class AddButtonComponent {
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
  }

  loadImages() {
    this.reloadImg.emit();
  }
}
