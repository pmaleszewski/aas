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
    }






})()