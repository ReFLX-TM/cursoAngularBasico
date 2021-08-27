import { Component } from '@angular/core';
import { Personaje } from '../interfaces/interface.dbz';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }
}
