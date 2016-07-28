(function() {
'use strict';

/**
 * pageTitle - Directive for set Page title - mata title
 */
var pageTitle = ['$rootScope', '$timeout',
function (        $rootScope,   $timeout) {
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
function (        $timeout,   $parse) {
    return {
        link: function (scope, element, attrs) {
            var model = $parse(attrs.asFocuser);
            scope.$watch(model, function(value) {
                if (value === true) {
                    $timeout(function() {
                        element[0].focus();
                    });
                }
            });
        }
    }
}];

var asElement = ['asElements',
    function (    asElements) {
        return {
            restrict: 'A',
            scope:{
                asElement: '@'
            },
            link: function (scope, element, attrs) {
                asElements[scope.asElement] = element;
            }
        }
    }
];

var asEqualto = function() {
    return {
        require: "ngModel",
        scope: {
            asEqualto: "="
        },
        link: function(scope, element, attributes, ngModelCtrl) {

            ngModelCtrl.$validators.asEqualto = function(value) {
                return value == scope.asEqualto;
            };

            scope.$watch("asEqualto", function() {
                ngModelCtrl.$validate();
            });
        }
    };
};

/**
 *
 * Pass all functions into module
 */
angular.module('app.directives', ['app.services'])
    .directive('asEqualto', asEqualto)
    .directive('asElement', asElement)
    .directive('pageTitle', pageTitle)
    .directive('asFocuser', asFocuser);

})();
