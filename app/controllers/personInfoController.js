/**
 * Created by WB on 16/9/26.
 */
app.controller('personInfoController', ['$scope', '$ocLazyLoad', function($scope, $ocLazyLoad){
    $ocLazyLoad.load([
        './resource/css/person_info.css'
    ]).then(function(){
        console.log('加载完成');
    });
    var self = this;
    self.countCtrl = [
        {
            name:"安博",
            child_dom:[
                {
                    name:'安博盛赢',
                    child_dom:[
                        {
                            name:'wangbing',
                            child_dom:[]
                        }
                    ],
                    show_child:false
                },
                {
                    name:'安博投资',
                    child_dom:[
                        {
                            name:'理财通',
                            child_dom:[
                                {
                                    name:'last',
                                    child_dom:[]
                                }
                            ],
                            show_child:false
                        }
                    ],
                    show_child:false
                },
                {
                    name:'安博大学',
                    child_dom:[],
                    show_child:false
                }
            ],
            show_child:false
        }
    ]
    $scope.get_source = function(){
        self.countCtrl[0].child_dom.pop();
    }
    $scope.dh = function(){
        $scope.donghua = !$scope.donghua;
    }
}]);