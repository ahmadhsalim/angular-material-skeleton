(function() {
angular.module('app.address')
.controller('AddressListController',
[			 '$state',
    function ($state) {
        var ctrl = this;

        ctrl.view = function (addressId) {
        	$state.go('.view', {addressId: addressId});
        }
    }
]);
})();