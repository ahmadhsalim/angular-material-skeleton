(function() {
angular.module('app.directives')
.directive('asContentBody', [
    function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'Common.ContentBody.Template'
        }
    }
]);
})();