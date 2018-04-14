app.controller("myctrl",function($scope,myfactory){
    $scope.doLogin=function(){
        var userobject=new User($scope.userid,$scope.pwd);
        var promise=myfactory.doLogin(userobject);
        promise.then(function(data){
          //  console.log("Back to promise...",data);
            $scope.message=data.data.message;
        },function(err){
            $scope.message=err;
        })
    },
    $scope.doRegister=function(){
        var userobject1=new User($scope.userid,$scope.pwd);
        var promise=myfactory.doRegister(userobject1);
        promise.then(function(data){
          //  console.log("Back to promise...",data);
            $scope.message=data.data.message;
        },function(err){
            $scope.message=err;
        })
    }
})