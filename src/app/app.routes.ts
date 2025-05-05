import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'edit/:id', component: EditContactComponent },
];
