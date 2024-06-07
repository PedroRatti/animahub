import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AvisoUmComponent } from './aviso-um/aviso-um.component';
import { AvisoDoisComponent } from './aviso-dois/aviso-dois.component';
import { InfoComponent } from './info/info.component';
import { LojaComponent } from './loja/loja.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AvisoUmComponent,
    AvisoDoisComponent,
    InfoComponent,
    LojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
