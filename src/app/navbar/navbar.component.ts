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

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
