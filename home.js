(function(){
    'use strict';

    angular
        .module('git', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig ($routeProvider) {

        $routeProvider
            .when('/login', {
                templateUrl: 'login.tmpl.html',

            })
            .when('/profile/:id', {
                templateUrl: 'profile.tmpl.html',
                controller: 'ProfileController',
                controllerAs: 'profileVm'
            })
            .when('/repos/:id', {
                templateUrl: 'repos.tmpl.html',
                controller: 'ReposController',
                controllerAs: 'reposVm'
            })
            .when('/updaterepo/:uname/:id', {
                templateUrl: 'updaterepo.tmpl.html',
               controller: 'UpdateRepoController',
                controllerAs: 'updaterepoVm'

            })
            .when('/gists/:id', {
                templateUrl: 'gists.tmpl.html',
                controller: 'GistsController',
                controllerAs: 'gistsVm'

            })
            .when('/pull/:uname/:id', {
                templateUrl: 'pull.tmpl.html',
                controller: 'PullController',
                controllerAs: 'pullVm'

            })

            .otherwise({
                redirectTo: '/login'
            })
    }
})();