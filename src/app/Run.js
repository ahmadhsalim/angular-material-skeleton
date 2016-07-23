(function () {
"use strict"

angular.module('app')
.run([      '$rootScope', '$mdMedia', '$state', '$stateParams', '$http', '$httpParamSerializerJQLike',
    function($rootScope,   $mdMedia,   $state,   $stateParams,   $http,   $httpParamSerializerJQLike){
        $rootScope.$mdMedia = $mdMedia;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        
        $http.defaults.paramSerializer = $httpParamSerializerJQLike;

        $http.defaults.transformRequest.push(
            function (data, headers) {
                data = angular.fromJson(data);
                if(angular.isObject(data))
                    delete data.included;
                
                return angular.toJson(data);
            }
        );

        $http.defaults.transformResponse.push(
            function (data, headers) {
                if(data && angular.isObject(data.data)){
                    if(!angular.isArray(data.included)) data.included = [];
                    if(angular.isArray(data.data)) data.included = data.included.concat(data.data);
                    else data.included.push(data.data);
                }
                return data;
            }
        );

        $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;
        });

    }]);
})();