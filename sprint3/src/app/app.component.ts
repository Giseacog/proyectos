import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SideComponent } from './componentes/side/side.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sprint3';
}
