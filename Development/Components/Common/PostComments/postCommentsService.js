
var app=require('../../../../Development/Assets/Js/appConfig.js');
app.factory('PostCommentService',['$http',function($http){
return{
      functionName:function(){
          console.log('service');
      }
    };
}]);
