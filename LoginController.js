/**
 * Created by Venkata on 1/29/2016.
 */
(function(){

    'use strict';
    angular
        .module('git')
        .controller('LoginController',LoginController);
    LoginController.$inject = ['$location'];
    function LoginController($location){
        var loginVm=this;
        var user={};

        loginVm.submit=function(user){
           var id=user.uname;
            if(user){
                $location.path("/profile/" +id);
            }
            $location.path("/profile/" +id);
            console.log(id);
        }
        console.log("LoginController");
    }
})();
