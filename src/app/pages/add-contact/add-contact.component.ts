import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Add this import
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  contact: Contact = { id: 0, name: '', email: '', phone: '' };

  constructor(private contactService: ContactService, private router: Router) {}

  addContact() {
    this.contactService.add(this.contact);
    this.router.navigate(['/']);
  }
}
