import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/app-header/app-header';
import { AppFooterComponent } from "./components/app-footer/app-footer";
import { AppHeroComponent } from './components/app-hero/app-hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeader, AppHeroComponent, AppFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-angular');
  isLoggedIn = false;
  materias = ['Programacion', 'Base Datos', 'Redes', 'Sistemas Operativos'];
}