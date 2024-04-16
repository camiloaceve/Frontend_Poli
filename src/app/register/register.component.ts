import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router) { }

  register() {
    this.router.navigate(['/home']);
  }

  login() {
    this.router.navigate(['/login']);
  }

}
