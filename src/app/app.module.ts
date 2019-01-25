import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'ngx-materialize';
import { HttpClientModule } from '@angular/common/http';
import { SnackOrderModule } from './modules/snackOrder/snackOrder.module';
import { ApiHandler } from './providers/api-provider';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule,
    SnackOrderModule
  ],
  providers: [ApiHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
