import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './orders/order.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { SnackComponent } from './snack/snack.component';
import { SnackOrderService } from './snackOrder.service';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: false,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 3000,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    SnackComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [SnackOrderService]
})


export class SnackOrderModule { }
