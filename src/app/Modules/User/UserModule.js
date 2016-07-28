(function() {
"use strict"

angular.module('app.users', [])
    .config([   '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.users', {
                url: '/users',
                views:{
                    '@app': {
                        templateUrl: 'Modules.User.Views.List',
                        controller: 'UserListController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'List User'
                }

            }).state('app.users.create', {
                url: '/create',
                views: {
                    '@app': {
                        templateUrl: 'Modules.User.Views.Form',
                        controller: 'UserCreateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Create User'
                }

            }).state('app.users.view', {
                url: '/:userId',
                views: {
                    '@app': {
                        templateUrl: 'Modules.User.Views.View',
                        controller: 'UserViewController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'View User'
                }

            }).state('app.users.view.update', {
                url: '/update',
                views: {
                    '@app': {
                        templateUrl: 'Modules.User.Views.Form',
                        controller: 'UserUpdateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Edit User'
                }

            });
        }
    ]);

})();
