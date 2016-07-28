(function() {
"use strict"

var asElements = [
    function () {
        return {
            content: null
        };
    }
];

angular.module('app.services', [])
.factory('asElements', asElements);
})();