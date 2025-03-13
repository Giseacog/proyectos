import { Component } from '@angular/core';
import { GridViewComponent } from '../../componentes/grid-view/grid-view.component';
import { ListViewComponent } from '../../componentes/list-view/list-view.component';
import { SideComponent } from '../../componentes/side/side.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [
    GridViewComponent,
    ListViewComponent,
    SideComponent,
    FooterComponent,
    NavbarComponent,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectedView: 'list' | 'grid' = 'grid'; //Se hace una variable se llama selectedView, que tiene un valor inicial que es 'grid'
  showSideMenu = false;

  /* 
 Funcion handleSelectView que recibe un parametro view
 Y se le asigna a seletedView

 */
  handleSelectView(view: 'list' | 'grid') {
    this.selectedView = view;
  }
  onToggleMenu(showMenu: boolean) {
    this.showSideMenu = showMenu;
  }
}
