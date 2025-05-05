import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  @Input() contact: Contact | undefined;
}
