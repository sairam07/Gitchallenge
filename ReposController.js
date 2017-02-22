/**
 * Created by sairam on 1/30/2016.
 */

(function() {

    'use strict';

    angular
        .module('git')
        .controller('ReposController', ReposController);

    ReposController.$inject = ['dataService','$routeParams'];

    function ReposController(dataService,$routeParams) {
        var reposVm = this;

        reposVm.repos = [];
        reposVm.uname=$routeParams.id;
        console.log(reposVm.uname);
        dataService
            .getrepos($routeParams.id)

            .then(function (data) {
                reposVm.repos = data;
                console.log(reposVm.repos);
            }, function (error) {
                console.log(error);
            });

        console.log('reposController');
    }
})();