(function() {
angular.module('app.bag', [])
    .config([   '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.bags', {
                url: '/bags',
                views:{
                    '@app': {
                        templateUrl: 'Modules.Bag.List',
                        controller: 'BagListController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'List Bag'
                }

            }).state('app.bags.create', {
                url: '/create',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Bag.Create',
                        controller: 'BagCreateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Create Bag'
                }

            }).state('app.bags.view', {
                url: '/:bagId',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Bag.View',
                        controller: 'BagViewController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'View Bag'
                }

            }).state('app.bags.view.update', {
                url: '/update',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Bag.Update',
                        controller: 'BagUpdateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Edit Bag'
                }

            });
        }
    ]);

})();
