import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddButtonComponent } from './pages/main/components/add-button/add-button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sprint4';
}
