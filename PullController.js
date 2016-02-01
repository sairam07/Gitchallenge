/**
 * Created by sairam on 1/31/2016.
 */
(function() {

    'use strict';

    angular
        .module('git')
        .controller('PullController', PullController);

    PullController.$inject = ['dataService','$routeParams'];

    function PullController(dataService,$routeParams) {
        var pullVm = this;

        pullVm.pull = [];
        pullVm.uname  =$routeParams.uname;
        pullVm.repo  =$routeParams.id;
        dataService
            .getpull(pullVm.uname , pullVm.repo )
            .then(function (data) {
                pullVm.pull = data;
                console.log(pullVm.pull);

            }, function (error) {
                console.log(error);
            });

        console.log('profileController');
    }
})();