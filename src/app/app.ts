import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/app-header/app-header';
import { Footer } from "./components/footer/footer";
import { AppHeroComponent } from './components/app-hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, Footer, AppHeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-angular');
  isLoggedIn = false;
  materias = ['Programacion', 'Base Datos', 'Redes', 'Sistemas Operativos'];
}

