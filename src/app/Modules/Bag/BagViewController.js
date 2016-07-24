(function() {
angular.module('app.bag')
    .controller('BagViewController',
    [
        function () {
            var ctrl = this;
            
            ctrl.bag = bag;
        }
    ]);
})();