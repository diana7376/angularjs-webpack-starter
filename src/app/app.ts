
declare const angular;
declare const require;

import './app.styles.scss';

/**
 * Import Application Modules
 */
import appConfig from './app.config';
import appRoutingConfig from './app.routes';
import appContacts from './contact/contact';

export const moduleName =
  angular.module('application', [
      'ui.router',
      appConfig,
      appRoutingConfig,
      appContacts
  ])
  .name;
