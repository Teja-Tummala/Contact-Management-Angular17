import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contacts: Contact[] = [];

  getAll(): Contact[] {
    return [...this.contacts];
  }

  getById(id: number): Contact | undefined {
    return this.contacts.find(c => c.id === id);
  }

  add(contact: Contact): void {
    contact.id = Date.now();
    this.contacts.push(contact);
  }

  update(id: number, updatedContact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index !== -1) this.contacts[index] = updatedContact;
  }

  delete(id: number): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}
