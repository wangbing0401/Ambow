/**
 * Created by WB on 16/9/20.
 */
var app = angular.module('myApp', ['ui.bootstrap', 'ngGrid', 'oc.lazyLoad', 'angular-loading-bar', 'ngAnimate', 'ngTouch', 'services', 'routes', 'filters', 'directives']);
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
    function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
    }]);
app.controller('indexController', ['$scope', function($scope){
    $scope.organization_click = function(e){
        $scope.person_info_list_show = false;
        $(".person_info_class").css({"color":"black", "border-bottom":"none"});
        $(e.target).css({"color":"#E84D44", "border-bottom":"3px solid #E84D44"});
    }
    $scope.person_info_click = function(){
        $scope.person_info_list_show = !$scope.person_info_list_show;
        if($scope.person_info_list_show){
            $(".person_info_class").css({"color":"#E84D44", "border-bottom":"3px solid #E84D44"});
        }else{
            $(".person_info_class").css({"color":"black", "border-bottom":"none"});
        }
    }
    $scope.person_li_click = function(){
        $scope.person_info_list_show = !$scope.person_info_list_show
        $(".organization_class").css({"color":"black", "border-bottom":"none"});
    }
}]);