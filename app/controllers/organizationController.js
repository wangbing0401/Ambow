/**
 * Created by WB on 16/9/21.
 */
app.controller('organizationController',['$scope', '$ocLazyLoad', function($scope, $ocLazyLoad){
    //$ocLazyLoad.load([
    //    './resource/js/lib/jquery/jquery.min.js'
    //]).then(function(){
    //    console.log('下载jquery完成');
    //});
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
    $scope.name = "wangbing";
    $scope.get_source = function(){
        self.countCtrl[0].child_dom.pop();
    }
    $scope.myData = [
        {name: "王兵", count: "A0003200", sex:'男', state:'实习', super:'赵博', job:'Web前端', username:'bing.wang', safety:'50'},
        {name: "王兵", count: "A0003200", sex:'男', state:'实习', super:'赵博', job:'Web前端', username:'bing.wang', safety:'50'},
        {name: "王兵", count: "A0003200", sex:'男', state:'实习', super:'赵博', job:'Web前端', username:'bing.wang', safety:'50'},
        {name: "王兵", count: "A0003200", sex:'男', state:'实习', super:'赵博', job:'Web前端', username:'bing.wang', safety:'50'},
        {name: "王兵", count: "A0003200", sex:'男', state:'实习', super:'赵博', job:'Web前端', username:'bing.wang', safety:'50'},
        {name: "王兵", count: "A0003200", sex:'男', state:'实习', super:'赵博', job:'Web前端', username:'bing.wang', safety:'50'},
        {name: "王兵", count: "A0003200", sex:'男', state:'实习', super:'赵博', job:'Web前端', username:'bing.wang', safety:'50'},
        {name: "王兵", count: "A0003200", sex:'男', state:'实习', super:'赵博', job:'Web前端', username:'bing.wang', safety:'50'},
        {name: "王兵", count: "A0003200", sex:'男', state:'实习', super:'赵博', job:'Web前端', username:'bing.wang', safety:'50'}
    ];
    $scope.gridOptions = {
        data: 'myData',
        enableSorting: false,
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        columnDefs:[
            {field:'name', displayName:'姓名'},
            {field:'count', displayName:'工号'},
            {field:'sex', displayName:'性别'},
            {field:'state', displayName:'状态'},
            {field:'super', displayName:'直接上级'},
            {field:'job', displayName:'岗位'},
            {field:'username', displayName:'登录名'},
            {field:'safety', displayName:'安全级别'}
        ]
    };
    $scope.export = function(){
        console.log($scope.myData);
    }
}]);