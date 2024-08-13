
declare const angular;

import contactRoutingConfig from './contact.routes';
import contactServiceModule from './services/contacts.service';
import contactListControllerModule from './side-bar/side-bar.controller';
import contactFormControllerModule from './recipe/recipe.controller';

export const appContacts = angular.module('app.contacts', [
  'ui.router',
  contactRoutingConfig,
  contactListControllerModule,
  contactFormControllerModule,
  contactServiceModule
]);
export default appContacts.name;
