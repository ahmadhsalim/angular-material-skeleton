(function() {
angular.module('app', [
    'ngMaterial',
    'ngResource',
    'ngMessages',
    'md.data.table',
    'ngUtils'
])
.config([    '$stateProvider', '$urlRouterProvider', '$resourceProvider', '$provide', '$httpProvider',
    function ($stateProvider,   $urlRouterProvider,   $resourceProvider,   $provide,   $httpProvider) {
        $stateProvider.state('app', {
            abstract: true,
            url: '',
            templateUrl: 'Common.Templates.Content',
            resolve:{

            },
            data:{
                class: ''
            }
        });
    }
]);
})();