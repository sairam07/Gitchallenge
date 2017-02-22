/**
 * Created by sairam on 1/31/2016.
 */
(function() {

    'use strict';

    angular
        .module('git')
        .controller('UpdateRepoController', UpdateRepoController);

    UpdateRepoController.$inject = ['dataService','$routeParams','$window'];

    function UpdateRepoController(dataService,$routeParams,$window) {
        var updaterepoVm = this;
        updaterepoVm.uname=$routeParams.uname;
        updaterepoVm.id=$routeParams.id;


        dataService
            .getUser($routeParams.uname)
            .then(function (data) {
                updaterepoVm.user = data;
                console.log(updaterepoVm.user);
                updaterepoVm.userGlobal = updaterepoVm.user;
                console.log(updaterepoVm.userGlobal);
            }, function (error) {
                console.log(error);
            });
        console.log(updaterepoVm.userGlobal);

        updaterepoVm.update=function(repo,uname,id){

        // login=updaterepoVm.login;
           // updaterepoVm.userGlobal = {name : "Empty"};
            updaterepoVm.uname=$routeParams.uname;
            updaterepoVm.id=$routeParams.id;

        var pass= repo.pass;


        dataService
            .updaterepo(repo,$routeParams.uname,$routeParams.id,pass)

            .then(function (data) {
                reposVm.repos = data;
                console.log(reposVm.repos);
                $window.alert("Updated Successfully");
            }, function (error) {
                console.log(error);
            });
        }

        console.log('reposController');
    }
})();