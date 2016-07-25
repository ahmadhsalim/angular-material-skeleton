(function() {
angular.module('app.mail', [])
    .config([   '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.mails', {
                url: '/mails',
                views:{
                    '@app': {
                        templateUrl: 'Modules.Mail.List',
                        controller: 'MailListController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'List Mail'
                }

            }).state('app.mails.create', {
                url: '/create',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Mail.Create',
                        controller: 'MailCreateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Create Mail'
                }

            }).state('app.mails.view', {
                url: '/:mailId',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Mail.View',
                        controller: 'MailViewController as ctrl',
                    }
                },
                data:{
                    pageTitle: 'View Mail'
                }

            }).state('app.mails.view.update', {
                url: '/update',
                views: {
                    '@app': {
                        templateUrl: 'Modules.Mail.Update',
                        controller: 'MailUpdateController as ctrl',
                    }
                },
                resolve:{
                },
                data:{
                    pageTitle: 'Edit Mail'
                }

            });
        }
    ]);

})();
