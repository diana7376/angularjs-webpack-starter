
declare const angular;

import contactRoutingConfig from './contact.routes';
import contactServiceModule from './services/contacts.service';
import contactListControllerModule from './contact-list/contact-list.controller';
import contactFormControllerModule from './contact-form/contact-form.controller';

export const appContacts = angular.module('app.contacts', [
  'ui.router',
  contactRoutingConfig,
  contactListControllerModule,
  contactFormControllerModule,
  contactServiceModule
]);
export default appContacts.name;
