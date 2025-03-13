import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  imports: [],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.css'
})
export class GridViewComponent {
  @Input() productName:string="";
  @Input() productDescription:string=""
  @Input() productImg:string="";

  @Output() productList: EventEmitter<string>=new EventEmitter<string>();
products: any;
  
  //metodo se manda llamar cada vez que den click
  viewList():void{
    this.productList.emit(this.productName)
  }

}
