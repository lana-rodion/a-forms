import { Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];
