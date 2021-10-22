declare const angular;
declare const require;

export const contactRoutingConfig = angular.module('contactRoutingConfig', [])
    .config(Config);

export default contactRoutingConfig.name;


Config.$inject = ['$stateProvider'];
function Config($stateProvider){
    $stateProvider
      .state('add-contact', {
        url: '/contacts/add',
        template: require('./contact-form/contact-form.controller.html'),
        controller: 'contactFormController as vm'
      })

      .state('contacts', {
        url: '/contacts',
        template: require('./contact-list/contact-list.controller.html'),
        controller: 'contactListController as vm'
      });
}

