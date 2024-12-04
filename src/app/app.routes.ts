import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthLayoutComponent } from './auth/pages/auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path:'home',
        component:AuthLayoutComponent
    },

    {
        path:'comics-list',
        loadComponent: () => import('./comics/pages/comics-layout/comics-layout.component').then(c => c.ComicsLayoutComponent ),
        canActivate:[authGuard]
    },

    {
        path:'comic-info/:id',
        loadComponent: () => import('./comics/components/comic-info/comic-info.component').then(c => c.ComicInfoComponent),
        canActivate:[authGuard]
    },

    {
        path:'sign-up',
        loadComponent: () => import('./auth/components/sign-up/sign-up.component').then(c => c.SignUpComponent)
    },

    {
        path:'log-in',
        loadComponent: () => import('./auth/components/log-in/log-in.component').then(c => c.LogInComponent)
    }
];
