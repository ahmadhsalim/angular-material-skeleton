(function() {
"use strict"

angular.module('app.users')
.controller('UserListController',
[			 '$state',
    function ($state) {
        var ctrl = this;

        ctrl.view = function (userId) {
        	$state.go('.view', {userId: userId});
        }
    }
]);
})();