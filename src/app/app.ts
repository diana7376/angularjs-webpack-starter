import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { appRoutes } from './app.routes';
import { ChefsController } from './contact/chefs/chefs.controller';
import { RecipeController } from './contact/recipe/recipe.controller';
import './index.scss';


export const moduleName = angular.module('application', [uiRouter])
  .controller('ChefsController', ChefsController)
  .controller('RecipeController', RecipeController)
  .config(appRoutes)
  .name;
