import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showSidebar: boolean = false;

  logout() {
    // Aquí va la lógica para cerrar sesión
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
