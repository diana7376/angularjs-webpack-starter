import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import { ChefsController } from './chefs/chefs.controller';
import { RecipeController } from './recipe/recipe.controller';

export default function contactRoutes($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {
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

  // Default route
  $urlRouterProvider.otherwise('/chefs');
}

contactRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
