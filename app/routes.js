/**
 * Created by WB on 16/9/20.
 */
var routes = angular.module('routes', ['ui.router']);
routes.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('organization', {
        url:'/organization',
        views:{
            '':{
                templateUrl:'./app/template/organization.html'
            },
            'right@organization':{
                templateUrl:'./app/template/organization_right.html'
            }
        },
        controller:'organizationController',
        controllerAs:'organization',
        resolve:{
            deps:['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load('./app/controllers/organizationController.js');
            }]
        }
    }).state('main', {
        url:'/main',
        templateUrl:'./app/template/main.html',
        controller:'mainController',
        controllerAs:'main',
        resolve:{
            deps:['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load('./app/controllers/mainController.js');
            }]
        }
    }).state('main.tab', {

    });
    $urlRouterProvider.otherwise('/organization');
}]);