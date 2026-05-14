import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {

  readonly brand = signal("PPW ANGULAR")
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(() => (this.showInfo() ? 'Ocular Info' : 'Mostrar Info')); // computadas trabajan con senales, se vuelven a calcular cada vez que cambian las señales que utilizan
  toggleInfo() {
    this.showInfo.update((value) => !value);
  }

  changeBrand(): void {
    //actualizar el valor de la senal brand
    this.brand.update((valor) => valor + "!");
  }
  resetBrand(): void {
    this.brand.set("PPW-ANGULAR")
  }

  
}

