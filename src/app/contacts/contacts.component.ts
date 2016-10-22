import { Component, OnInit } from '@angular/core';
import { Contact } from '.././shared/contact.model';
import { ContactsService } from '.././shared/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    //this.contacts =  this.contactsService.loadContacts();
    this.contactsService.loadContacts()
      .subscribe(
      data => this.contacts = data, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });

  }


}
