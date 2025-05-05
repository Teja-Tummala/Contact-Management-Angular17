import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent {
  contact: Contact | undefined;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.contact = this.contactService.getById(id);
  }

  updateContact() {
    if (this.contact) {
      this.contactService.update(this.contact.id, this.contact);
      this.router.navigate(['/']);
    }
  }
}
