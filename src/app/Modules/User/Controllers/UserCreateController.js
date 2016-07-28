(function() {
"use strict"

angular.module('app.users')
.controller('UserCreateController',
[            '$mdToast', 'asElements',
    function ($mdToast,   asElements) {
        var ctrl = this;

        ctrl.save = function ($event) {
        	console.log('User created!', ctrl.user);

            $mdToast.show($mdToast.simple()
                .textContent('User created successfully!')
                .position('top right')
                .hideDelay(3000)
                .action('OK')
                .parent(asElements.container)
            );
        };
    }
]);
})();