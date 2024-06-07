import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AvisoUmComponent } from './aviso-um/aviso-um.component';
import { AvisoDoisComponent } from './aviso-dois/aviso-dois.component';
import { InfoComponent } from './info/info.component';
import { LojaComponent } from './loja/loja.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aviso1', component: AvisoUmComponent},
  { path: 'aviso2', component: AvisoDoisComponent},
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent},
  { path: 'loja', component: LojaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
