import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component'; 
import { HomePageComponent } from './components/home-page/home-page.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { DonationsPageComponent } from './components/donations-page/donations-page.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'events',
        component: EventsPageComponent
    },
    {
        path: 'donate',
        component: DonationsPageComponent
    }
];
