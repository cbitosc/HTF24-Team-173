import { Component, input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [InputTextModule, FormsModule, MenubarModule, ButtonModule, CardModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  menuItems = [
    { label: 'About', routerLink: '/#about' },
    { label: 'Benefits', routerLink: '/#benefits' },
    { label: 'Events', routerLink: '/#events' },
    { label: 'Mentorship', routerLink: '/#mentorship' },
    { label: 'Directory', routerLink: '/#directory' },

  ];
}
