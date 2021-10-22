declare const angular;
import './contact-form.styles.scss';


export const contactFormControllerModule = angular.module('contactFormControllerModule', [])
  .controller('contactFormController', ContactFormController);

export default contactFormControllerModule.name;


ContactFormController.$inject = ['$scope', 'ContactService', '$state'];
function ContactFormController($scope, ContactService, $state){
  let vm = this;
  vm.lastName = null;
  vm.firstName = null;
  vm.submit = submit;

  function submit(){
    const lastName = vm.lastName;
    const firstName = vm.firstName;
    ContactService.add({lastName: lastName, firstName: firstName});

    vm.lastName = '';
    vm.firstName = '';

    $state.go('contacts');
  }
}
