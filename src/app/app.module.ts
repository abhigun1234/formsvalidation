import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeplateComponent } from './teplate/teplate.component';
import { PipComponent } from './pip/pip.component';
import { TdfComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    TeplateComponent,
    PipComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
