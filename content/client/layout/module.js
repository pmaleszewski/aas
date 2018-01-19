(function (){
    'use strict'

    angular.module('client.layout', ['ui.router'])

    angular.module('client.layout').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider){
        $stateProvider
        .state('site', {
            views :{
                "root" : {
                    templateUrl: 'client/layout/layout.tpl.html',
                    controller : 'layoutController as lc'
                }
            }
        })
    }











})()