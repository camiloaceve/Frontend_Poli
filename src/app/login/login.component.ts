import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  login() {
    // Redirecion a los otros componentes
    this.router.navigate(['/home']);
  }

  register(){

    this.router.navigate(['/register']);
  }

}
