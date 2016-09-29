/**
 * Created by WB on 16/9/20.
 */
var directives = angular.module('directives', []);

directives.component('ambowTree', {
    bindings:{
        source: '='
    },
    controller: function(){
        var self = this;
        self.tree_click = function(l){
            l.show_child = !l.show_child;
        }
    },
    template: `
        <div style="padding-left: 10px;cursor: pointer;" ng-repeat="l in $ctrl.source" ng-click="$ctrl.tree_click(l);$event.stopPropagation();">
        {{l.name}}
            <ambow-tree source="l.child_dom" ng-show="l.show_child"></ambow-tree>
        </div>
    `
});
directives.component('getSource', {
    bindings:{
        getName:'&'
    },
    controller: function($scope){
        var self = this;
        this.get_name = function(){
            self.getName();
        }
    },
    template:`
        <button ng-click="$ctrl.get_name()">get</button>
    `
});