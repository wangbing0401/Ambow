/**
 * Created by WB on 16/9/20.
 */
var services = angular.module('services', ['ngResource']);
//公共服务,处理网络请求异常或者程序异常等等情况
// params{result, status, headers, config, paramsObj}
services.factory("handleHttpError", function(){
    return {
        deal_app_error: function(params) {
            if (!params.result || !params.result.success) {
                console.log(params.result || params.params.result.msg);
                params && params["paramsObj"] && (params["error_code"] = "app_error") && params["paramsObj"]["errorDo"] && params["paramsObj"]["errorDo"](params);
                return false;
            }
            return true;
        },
        deal_network_error: function(params){
            console.log("错误码:", params.status);
            params && params["paramsObj"] && (params["error_code"] = "network_error") && params["paramsObj"]["errorDo"] && params["paramsObj"]["errorDo"](params);
            return false;
        }
    }
});

// paramsObj {url: '/', params:{a:1, b:1}, successDo:function(handleResult), errorDo:(handleResult)   }
services.factory('httpBase', ['$http', 'handleHttpError', function($http, handleHttpError){
    return{
        request: function(paramsObj){
            var requestObj = {method: paramsObj.method, url: paramsObj.url};
            if (paramsObj.method == "GET"){
                requestObj.params = paramsObj.params;
            }else {
                requestObj.data = paramsObj.params;
            }

            $http(requestObj).success(function(result,status,headers,config){
                var handleResult = {result: result,status: status,headers: headers,config:config, paramsObj:paramsObj};
                if(handleHttpError.deal_app_error(handleResult)){
                    paramsObj["successDo"] && paramsObj["successDo"](handleResult);
                }
            }).error(function(result,status,headers,config){
                handleHttpError.deal_network_error({result: result,status: status,headers: headers,config:config, paramsObj:paramsObj});
            })
        },


        get: function(paramsObj){
            paramsObj.method = "GET";
            this.request(paramsObj);
        },

        post: function(paramsObj, url, params, successFunc, errorFunc, alwaysFunc){
            paramsObj.method = "POST";
            this.request(paramsObj);
        },
        put: function(paramsObj){
            paramsObj.method = "PUT";
            this.request(paramsObj);
        }
    }
}]);
//配置网络请求
services.factory('orders', ['httpBase', function(httpBase){
    return{
        list: function(params, successDo, errorDo){
            httpBase.get({
                url: '/api/orders/list',
                params: params,
                successDo: successDo,
                errorDo: errorDo
            });
        },
        first: function(){
            console.log(222);
        }
    }
}]);
