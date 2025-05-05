import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];

  currentPage = 1;
  itemsPerPage = 5;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {
    this.contacts = this.contactService.getAll();
    this.filteredContacts = [...this.contacts];
  }

  get recentContacts() {
    return this.contacts.slice(-3).reverse(); 
  }
  

  get totalPages(): number {
    return Math.ceil(this.filteredContacts.length / this.itemsPerPage);
  }

  get paginatedContacts(): Contact[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredContacts.slice(start, start + this.itemsPerPage);
  }

  searchContacts(searchTerm: string): void {
    this.currentPage = 1; 

    if (!searchTerm.trim()) {
      this.filteredContacts = [...this.contacts];
    } else {
      const term = searchTerm.toLowerCase();
      this.filteredContacts = this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(term) || contact.phone.includes(searchTerm)
      );
    }
  }

  editContact(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteContact(id: number): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.delete(id);
      this.contacts = this.contactService.getAll();
      this.searchContacts(''); 
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }
}
