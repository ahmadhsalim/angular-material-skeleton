(function() {
"use strict"

angular.module('app.roles')
.controller('RoleCreateController',
[            '$mdToast', 'asElements',
    function ($mdToast,   asElements) {
        var ctrl = this;

        ctrl.save = function ($event) {
        	console.log('Role created!', ctrl.role);

            $mdToast.show($mdToast.simple()
                .textContent('Role created successfully!')
                .position('top right')
                .hideDelay(3000)
                .action('OK')
                .parent(asElements.container)
            );
        };
    }
]);
})();