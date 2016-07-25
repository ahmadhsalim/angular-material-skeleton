(function() {
"use strict"

angular.module('app', [
  'ngMaterial',
  'ngResource',
  'ngMessages',
  'ui.router',
  'md.data.table',
  'angular-click-outside',
  'ngUtils',

  'app.directives',

  'app.dashboard',
  'app.user',
  'app.address',
  'app.mail',
  'app.bag'
])
.config([  '$stateProvider', '$urlRouterProvider', '$resourceProvider', '$provide', '$httpProvider',
  function ($stateProvider,   $urlRouterProvider,   $resourceProvider,   $provide,   $httpProvider) {
    

    $resourceProvider.defaults.actions.get.isArray = false;
    $resourceProvider.defaults.actions.query.isArray = false;
    $resourceProvider.defaults.actions.update = { method: 'PATCH' };

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('app', {
      abstract: true,
      url: '',
      templateUrl: 'Common.Templates.Content',
      resolve:{

      },
      data:{
        class: 'as-contents-fixed md-wireframe-1dp'
      }
    })
    .state('guest', {
      abstract: true,
      url: '',
      template: ''
    });
  }
]);
})();