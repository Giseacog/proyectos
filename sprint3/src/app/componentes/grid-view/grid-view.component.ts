import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/productos';

@Component({
  selector: 'app-grid-view',
  imports: [],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.css'
})
export class GridViewComponent {
 

  @Output() productList: EventEmitter<string>=new EventEmitter<string>();
  @Input() products: Producto[] =[] 
  
  //metodo se manda llamar cada vez que den click
  viewList():void{
    this.productList.emit('')
  }

}
