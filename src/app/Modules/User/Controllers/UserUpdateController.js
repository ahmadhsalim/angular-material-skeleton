(function() {
"use strict"

angular.module('app.users')
.controller('UserUpdateController',
[            '$mdToast', 'asElements',
    function ($mdToast,   asElements) {
        var ctrl = this;
        ctrl.editMode = true;

        ctrl.save = function ($event) {
        	console.log('User saved!', ctrl.user);

            $mdToast.show($mdToast.simple()
                .textContent('User saved successfully!')
                .position('top right')
                .hideDelay(3000)
                .action('OK')
                .parent(asElements.container)
            );
        };
    }
]);
})();