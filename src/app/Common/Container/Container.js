(function() {
"use strict"

angular.module('app.directives')
.directive('asContainer', [
    function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'Common.Container.Template'
        }
    }
]);
})();