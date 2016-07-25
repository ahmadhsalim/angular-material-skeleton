(function() {
angular.module('app.mail')
.controller('MailListController',
[			 '$state',
    function ($state) {
        var ctrl = this;

        ctrl.view = function (mailId) {
        	$state.go('.view', {mailId: mailId});
        }
    }
]);
})();