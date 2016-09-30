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
    }).state('person_info', {
        url:'/person_info',
        views:{
            '':{
                templateUrl:'./app/template/person_info.html'
            },
            'right@person_info':{
                templateUrl:'./app/template/person_info_right.html'
            }
        },
        controller:'personInfoController',
        controllerAs:'personInfo',
        resolve:{
            deps:['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load('./app/controllers/personInfoController.js');
            }]
        }
    }).state('main.tab', {

    });
    $urlRouterProvider.otherwise('/organization');
}]);