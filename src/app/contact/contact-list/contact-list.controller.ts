declare const angular;
import './contact-list.styles.scss';


export const contactListControllerModule = angular.module('contactListControllerModule', [])
  .controller('contactListController', ContactListController);

export default contactListControllerModule.name;


ContactListController.$inject = ['$scope', 'ContactService'];
function ContactListController($scope, ContactService){
  let vm = this;
  vm.contacts = [];
  vm.remove = remove;

  init();

  function init(){
    ContactService.getAll().then(function (response){
      vm.contacts = response;
    });
  }

  function remove(id: number) {
    vm.contacts = vm.contacts.filter(contact => contact.id !== id);
  }
}

