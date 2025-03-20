import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { Producto } from '../../models/productos';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  cartItems: string[] = [];
  total: number = 0;

   @Input() products: Producto[] =[] 
  //funcion (El hijo avisa que entraron a list)
  productList(product: string): void {
    this.cartItems.push(product);
  }
}
