(function() {
angular.module('app.bag')
.controller('BagListController',
[			 '$state',
    function ($state) {
        var ctrl = this;

        ctrl.view = function (bagId) {
        	$state.go('.view', {bagId: bagId});
        }
    }
]);
})();