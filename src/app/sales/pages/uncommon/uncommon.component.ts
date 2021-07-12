import { Component } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { interval } from 'rxjs';

interface User {
  name: string,
  value: string,
  gender: string,
}

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styles: [
    `
      .textContent {
        margin: 0px 15px;
      }
      `
  ]
})
export class UncommonComponent {

  // i18nSelect PIPE ---------------->

  users: User[] = [
    {
      name: 'Luis',
      value: 'luis',
      gender: 'masculine'
    },
    {
      name: 'Gini',
      value: 'gini',
      gender: 'femenine'
    }
  ]

  selectedUser: User = {
    name: 'Luis',
    value: 'luis',
    gender: 'masculine'
  }

  welcomeMap = {
    'masculine': 'bienvenido a tu página',
    'femenine': 'bienvenida'
  }

  // i18nPlural PIPE ---------------->

  alerts: number = 3;
  alertsMap = {
    '=0': 'No tienes ninguna notificación nueva',
    '=1': 'Tienes una notificación nueva',
    'other': 'Tienes # notificaciones nuevas',
  }

  accumulate(symbol: boolean) {
    symbol ? this.alerts++ : (!symbol && this.alerts > 0) ? this.alerts-- : this.alerts
  }

  accumulateLegible(symbol: boolean) {
    if (!symbol) {
      this.alerts > 0 && this.alerts--
    }
    if (symbol) {
      this.alerts++
    }
  }

  // KEYVALUE PIPE ---------------->

  person = {
    name: 'Luis',
    age: '31',
    place: 'Vigo'
  }

  // ASYNC PIPE ---------------->

  myObservable = interval(1000);

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise data')
    }, 3000);
  })

}
