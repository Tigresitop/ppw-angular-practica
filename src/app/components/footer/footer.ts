// src/app/components/footer/footer.ts
import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.html',
    styleUrl: './footer.css'
})
export class Footer {
    readonly anioActual = signal(new Date().getFullYear());
    readonly autor = signal('Estudiante de Ingeniería'); 
}