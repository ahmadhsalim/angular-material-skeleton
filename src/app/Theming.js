(function () {
"use strict"

angular.module('app')
.config([   '$mdThemingProvider',
    function($mdThemingProvider){

        var topBarColourMap = $mdThemingProvider.extendPalette('red', {
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50', '100'],
            '50': 'f2f2f2',
            '100': 'd85c5c',
            '700': 'DB4437',
            '900': 'EEEEEE'
        });

        $mdThemingProvider.definePalette('topToolbarTheme', topBarColourMap)
            .theme('topnav')
            .primaryPalette('topToolbarTheme', {
                'default': '700',
                'hue-1': '50',
                'hue-2': '100'
            })
            .accentPalette('green')
            .backgroundPalette('topToolbarTheme', {
                'default': '900'
            });

        $mdThemingProvider.theme('input')
            .primaryPalette('grey');

        $mdThemingProvider.theme('menu')
            .primaryPalette('blue-grey')
            .accentPalette('amber')
            .backgroundPalette('grey', {
                'hue-1': '200'
            });

        var searchColourMap = $mdThemingProvider.extendPalette('red', {
            '50': 'E06055'
        });
        $mdThemingProvider.definePalette('searchTheme', searchColourMap)
            .theme('search')
            .backgroundPalette('searchTheme', {
                'hue-1': '50'
            });

        var defaultColourMap = $mdThemingProvider.extendPalette('blue', {
            '50': 'FFFFFF'
        });
        $mdThemingProvider.definePalette('defaultTheme', defaultColourMap)
            .theme('default')
            .primaryPalette('defaultTheme', {
                'hue-3': '50'
            })
            .accentPalette('orange')
            .backgroundPalette('grey', {
                'hue-2': '100',
                'hue-3': '200'
            });
    }]);
})();