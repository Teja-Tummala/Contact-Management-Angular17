import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ContactCardComponent } from "../contact-card/contact-card.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactCardComponent,CommonModule,RouterModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  
  constructor(private contactService: ContactService) {}
}
