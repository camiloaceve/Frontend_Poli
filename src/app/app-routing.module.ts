import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OurServicesComponent } from './our-services/our-services.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a '/home'
  { path: '**', redirectTo: '/home' } // Redirige rutas no encontradas a '/home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
