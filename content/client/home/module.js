(function (){
    'use strict'

    angular.module('client.home', ['ui.router'])

    angular.module('client.home').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider){
        $stateProvider
        .state('site.home', {
            url: '/',
            views: {
                'home': {
                    templateUrl: 'client/home/home.html',
                    controller: 'homeController as hc'
                }
            }
        })
    }











})()