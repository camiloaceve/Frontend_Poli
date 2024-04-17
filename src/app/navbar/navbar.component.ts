import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showSidebar: boolean = false;

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/login']);
  }

  services() {
    this.router.navigate(['/our-services']);
  }

  contact() {
    this.router.navigate(['/contact']);
  }

  home() {
    this.router.navigate(['/']);
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this.router.navigate(['/profile']);
  }
}
