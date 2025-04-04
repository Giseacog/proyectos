import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showMenu: boolean = false;

  @Output() toggleMenu = new EventEmitter<boolean>();

  toggleShowMenu() {
    this.showMenu = !this.showMenu;
    this.toggleMenu.emit(this.showMenu);
  }
}
