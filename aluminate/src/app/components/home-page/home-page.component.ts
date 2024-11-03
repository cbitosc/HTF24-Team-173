import { Component,inject, OnInit } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router, private authservice: AuthService) {}

  ngOnInit() {
    const email = sessionStorage.getItem('email');
    if (!email) {
      this.router.navigate(['login']);
    }
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
