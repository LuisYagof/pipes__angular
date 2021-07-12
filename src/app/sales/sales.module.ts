import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO: aquí había que importar FormsModule para que no rompiese el [(ngModel)] del p-select en el componente "Uncommon"!!
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FliesPipe } from './pipes/flies.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { ColorPipe } from './pipes/color.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    OrderComponent,
    CapitalizePipe,
    FliesPipe,
    OrderPipe,
    ColorPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class SalesModule { }
