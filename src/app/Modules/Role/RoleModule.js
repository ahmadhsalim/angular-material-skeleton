(function() {
"use strict"

angular.module('app.roles', [])
    .config([   '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.roles', {
                url: '/roles',
                views:{
                    '@app': {
                        templateUrl: 'Modules.Role.Views.List',
                        controller: 'RoleListController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'List Role'
                }

            }).state('app.roles.create', {
                url: '/create',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Role.Views.Form',
                        controller: 'RoleCreateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Create Role'
                }

            }).state('app.roles.view', {
                url: '/:roleId',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Role.Views.View',
                        controller: 'RoleViewController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'View Role'
                }

            }).state('app.roles.view.update', {
                url: '/update',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Role.Views.Form',
                        controller: 'RoleUpdateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Edit Role'
                }

            });
        }
    ]);

})();
