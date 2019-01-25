import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './modules/snackOrder/orders/order.component';
import { SnackComponent } from './modules/snackOrder/snack/snack.component';

const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent,
    data: {lunchs: {} }
  },
  {
    path: 'snacks',
    component: SnackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
