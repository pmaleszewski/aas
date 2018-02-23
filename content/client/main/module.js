(function (){
    'use strict'

    angular.module('client.main', ['ui.router'])

    angular.module('client.main').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider){
        $stateProvider
        .state('site.home', {
            url: '/',
            views: {
                'home': {
                    templateUrl: 'client/main/home/home.html',
                    controller: 'homeController as hc'
                }
            }
        })
        .state('site.general-automation', {
            url: '/general-automation',
            views : {
                'home': {
                    templateUrl: 'client/main/general-automation/general-automation.html',
                    controller: 'generalController as gc'
                }
            }

        })
        .state('site.lab-automation', {
            url: '/lab-automation', 
            views: {
                'home': {
                    templateUrl: 'client/main/lab-automation/lab-automation.html',
                    controller: 'labController as lc'
                }
            }
        })
        .state('site.motion-systems', {
            url: '/motion-systems',
            views: {
                'home': {
                    templateUrl: 'client/main/motion-systems/motion-systems.html',
                    controller: 'motionController as mc'
                }
            }
        })
        .state('site.machine-design', {
            url: '/machine-design',
            views: {
                'home': {
                    templateUrl: 'client/main/machine-design/machine-design.html',
                    controller: 'designController as dc'
                }
            }
        })
    }






})();