
(function() {

    'use strict';

    angular
        .module('git')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['dataService','$routeParams'];

    function ProfileController(dataService,$routeParams) {
        var profileVm = this;

        profileVm.user = [];

        dataService
            .getUser($routeParams.id)
            .then(function (data) {
                profileVm.user = data;
            }, function (error) {
                console.log(error);
            });

        console.log('profileController');
    }
})();