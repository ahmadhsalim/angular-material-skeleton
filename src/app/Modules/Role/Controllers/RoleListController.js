(function() {
"use strict"

angular.module('app.roles')
.controller('RoleListController',
[			 '$state',
    function ($state) {
        var ctrl = this;

        ctrl.view = function (roleId) {
        	$state.go('.view', {roleId: roleId});
        }
    }
]);
})();