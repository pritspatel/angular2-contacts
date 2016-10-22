import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
      path:'contacts',
      component:ContactsComponent
  },
  {
      path:'contacts/add-contact',
      component:AddContactComponent
  },
  {
      path:'contacts/edit-contact',
      component:EditContactComponent
  },
  {
      path:'contacts/delete-contact',
      component:DeleteContactComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);