import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './register/users/users.component';

// Definición de las rutas de la aplicación
export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta para el componente Home
  { path: 'login', component: LoginComponent }, // Ruta para el componente Login
  { path: 'register', component: RegisterComponent }, // Ruta para el componente Register
  { path: 'our-services', component: OurServicesComponent }, // Ruta para el componente OurServices
  { path: 'contact', component: ContactComponent }, // Ruta para el componente Contact
  { path: 'profile', component: UsersComponent }, // Ruta para el componente Users (perfil de usuario)
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a '/home' cuando la URL es exactamente igual a la raíz
  { path: '**', redirectTo: '/home' } // Redirige cualquier otra ruta no encontrada a '/home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa y configura el enrutamiento para la aplicación principal
  exports: [RouterModule] // Exporta el módulo de enrutamiento para su uso en otros módulos
})
export class AppRoutingModule { } // Define la clase del módulo de enrutamiento de la aplicación
