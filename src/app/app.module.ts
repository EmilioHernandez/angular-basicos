import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AcumuladorModule } from './acumulador/acumulador.module'

import { AppComponent } from './app.component'
import { HeroeModule } from './heroes/heroes.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    AcumuladorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
