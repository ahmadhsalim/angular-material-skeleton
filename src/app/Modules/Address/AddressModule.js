(function() {
angular.module('app.address', [])
    .config([   '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.addresses', {
                url: '/addresses',
                views:{
                    '@app': {
                        templateUrl: 'Modules.Address.List',
                        controller: 'AddressListController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'List Address'
                }

            }).state('app.addresses.create', {
                url: '/create',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Address.Create',
                        controller: 'AddressCreateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Create Address'
                }

            }).state('app.addresses.view', {
                url: '/:addressId',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Address.View',
                        controller: 'AddressViewController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'View Address'
                }

            }).state('app.addresses.view.update', {
                url: '/update',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Address.Update',
                        controller: 'AddressUpdateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Edit Address'
                }

            });
        }
    ]);

})();
