import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HealthComponent } from './health.component';
import { HealthService } from './health.service';
import { DashComponent } from './dashboardcomponent';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HealthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
