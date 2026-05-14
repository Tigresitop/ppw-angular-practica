import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {
  readonly brand = signal("PPW-ANGULAR");
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(() => (this.showInfo() ? 'Ocultar Info' : 'Mostrar Info')); 
  
  toggleInfo() {
    this.showInfo.update((value) => !value);
  }

  changeBrand(): void {
    this.brand.update((valor) => valor + "!");
  }
  
  resetBrand(): void {
    this.brand.set("PPW-ANGULAR");
  }
}