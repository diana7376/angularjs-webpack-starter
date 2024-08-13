declare const angular;
import './recipe.styles.scss';


export const contactFormControllerModule = angular.module('contactFormControllerModule', [])
  .controller('contactFormController', RecipeController);

export default contactFormControllerModule.name;


RecipeController.$inject = ['$scope', 'ContactService', '$state'];
export function RecipeController($scope, ContactService, $state){
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

    $state.go('chefs');
  }
}
