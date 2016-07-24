(function() {
'use strict';

/**
 * pageTitle - Directive for set Page title - mata title
 */
var pageTitle = ['$rootScope', '$timeout', function ($rootScope, $timeout) {
    return {
        restrict: 'A',
        scope:{
            pageTitle: '@'
        },
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                $rootScope.appName = scope.pageTitle;
                // Default title - load on Dashboard 1
                var title = scope.pageTitle;
                var suffix = scope.pageTitle ? ' | ' + title : '';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle + suffix;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
}];

var asFocuser = ['$timeout', '$parse',
    function (    $timeout,   $parse) {
        return {
            link: function (scope, element, attrs) {
                var model = $parse(attrs.pxFocuser);
                scope.$watch(model, function(value) {
                    if (value === true) {
                        $timeout(function() {
                            element[0].focus();
                        });
                    }
                });
            }
        }
    }
];
/**
 *
 * Pass all functions into module
 */
angular.module('app.directives', [])
    .directive('pageTitle', pageTitle)
    .directive('asFocuser', asFocuser);

})();
