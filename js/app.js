/*global angular*/
// importing StarWars controller from separate file nto our app
var app = angular.module('StarWarsApp', ['StarWarsCtrls', 'ui.router']);

// stateProvider tracks our state change (routes)
// urlRouterProvider (changes url without actually reloading pages)
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // this statement handles what happens if there's not a page at that route, can direct to home or to 404 page
    $urlRouterProvider.otherwise('/');

    //define routes
    $stateProvider
    // this will be route for display page of 1 movie
        .state('films', {
            // route itself
            url: '/',
            // html to render
            templateUrl: 'views/films.html',
            // what controller our logic for the page is in
            controller: 'FilmsCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
                // no controller because static route, nothing occuring on page, could add logic or function which would need a controller
        })
        .state('showFilm', {
            url: '/films/:id',
            templateUrl: 'views/filmShow.html',
            controller: 'FilmShowCtrl'
        });
}]);
