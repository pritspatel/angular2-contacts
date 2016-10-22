import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Contact} from './contact.model';

@Injectable()
export class ContactsService {

 private BASE_URL = 'http://localhost:2403/contacts';
  
  constructor(private http: Http) { }

  // getContacts(){
  //   console.log('getContacts ....');
  //   return  [
  //      new Contact('pritesh','patel','pritesh.1.patel@gm.com','678-514-9219'),
  //      new Contact('jalpa','patel','jalpapatel@gm.com','678-717-7546'),    
  //    ];
  // }

  loadContacts() : Observable<Contact[]>{
    // ...using get request
         return this.http.get(this.BASE_URL)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  
}
