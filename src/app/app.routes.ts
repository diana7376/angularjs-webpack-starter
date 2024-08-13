import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import { ChefsController } from './contact/chefs/chefs.controller';
import { RecipeController } from './contact/recipe/recipe.controller';

export function appRoutes($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {
  $stateProvider
    .state('chefs', {
      url: '/chefs',
      templateUrl: 'app/contact/chefs/chefs.controller.html',
      controller: ChefsController,
      controllerAs: 'ctrl'
    })
    .state('recipes', {
      url: '/recipes',
      templateUrl: 'app/contact/recipe/recipe.controller.html',
      controller: RecipeController,
      controllerAs: 'ctrl'
    });

  $urlRouterProvider.otherwise('/chefs');
}

appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

