(function() {
"use strict"

angular.module('app.roles')
.controller('RoleUpdateController',
[            '$mdToast', 'asElements',
    function ($mdToast,   asElements) {
        var ctrl = this;
        ctrl.editMode = true;

        ctrl.save = function ($event) {
        	console.log('Role saved!', ctrl.role);

            $mdToast.show($mdToast.simple()
                .textContent('Role saved successfully!')
                .position('top right')
                .hideDelay(3000)
                .action('OK')
                .parent(asElements.content)
            );
        };
    }
]);
})();