(function() {
"use strict"

angular.module('app')
.controller('ApplicationController',
[          '$mdMedia', '$scope', '$state', '$mdToast', '$element', '$mdSidenav',
  function ($mdMedia,   $scope,   $state,   $mdToast,   $element,   $mdSidenav) {
    var ctrl = this;

    ctrl.toggleSidenav = function () {
        if($mdMedia('gt-sm')){
            ctrl.isSidenavLocked = !ctrl.isSidenavLocked;
        }else{
            $mdSidenav('left').toggle();
        }
    };
    ctrl.isOpen = function () {
        return $mdSidenav('left').isOpen();
    };

    var originatorEv;
    ctrl.openProfileMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    ctrl.toggleSearch = function () {
        ctrl.showSearch = !ctrl.showSearch;
        if(!ctrl.showSearch) ctrl.searchQuery = "";
    };

    ctrl.signOut = function () {
      $mdToast.show(
        // sign out function //
        $mdToast.simple()
          .parent($element[0].querySelector('.as-main-container'))
          .position('top right')
          .textContent('Signed out.')
          .hideDelay(3000)
      );
    };

    ctrl.search = function ($event, searchForm,  searchQuery) {
        if($event.code === 'Enter' || $event.code === 'NumpadEnter'){
            if(searchForm.$valid){

              // search request goes here //
              $mdToast.show(
                $mdToast.simple()
                  .parent($element[0].querySelector('.as-main-container'))
                  .position('top right')
                  .textContent('Searching')
                  .hideDelay(3000)
              );

            }else{
              $mdToast.show(
                $mdToast.simple()
                  .parent($element[0].querySelector('.as-main-container'))
                  .position('top right')
                  .textContent('Invalid national ID number!')
                  .hideDelay(3000)
              );
            }
        }
    };

  }
]
);
})();