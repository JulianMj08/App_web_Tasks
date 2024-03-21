import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToDoDayComponent } from './components/to-do-day/to-do-day.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToDoDayComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  //@ViewChild(ToDoDayComponent) hijo!: ToDoDayComponent;

  handleDarkModeChange(darkMode: boolean) {
     //Manejar el cambio de modo oscuro aquí en el componente padre
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

}
