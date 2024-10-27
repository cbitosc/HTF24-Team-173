import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login = {
    email: '',
    password: '',
  };

  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  onLogin() {
    const { email, password } = this.login;
    if (!email || !password) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please enter both email and password',
      });
      return;
    }

    this.authService.loginUser(email, password).subscribe({
      next: (user) => {
        if (user) {
          sessionStorage.setItem('email', email);
          this.router.navigate(['home']);
        } else {
          this.showError();
        }
      },
      error: () => {
        this.showError();
      },
    });
  }

  private showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Login Failed',
      detail: 'Invalid email or password. Please try again.',
    });
  }
}
