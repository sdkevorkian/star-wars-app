/*global angular*/
// this tells our module what this file is
// let's us use it out of this file.
// StarWars Services is imported into our controller
var controllers = angular.module('StarWarsCtrls', ['StarWarsServices']);


controllers.controller('FilmShowCtrl', ['$scope', '$stateParams', 'Films', function($scope, $stateParams, Films) {
    $scope.film = {};
    // $resource allows us to use Factory.get() function
    // to get id # from url, can grab from $stateParams (similar to node req.params)
    // we are using the same variable name (id) as we aren't changing the data as we pass it around
    // .get takes data, sucess cb, and error cb as parameters
    Films.get({
        id: $stateParams.id
    }, function success(data) {
        $scope.film = data;
    });
}]);

controllers.controller('FilmsCtrl', ['$scope', 'Films', function($scope, Films) {
    // $scope.movieId = 1;
    // $scope.films = [];
    // $scope.loading = false;

    // $scope.getAll = function() {
    //     $scope.loading = true;
    //     Films.query(function success(data) {
    //         $scope.films = data.results;
    //         $scope.loading = false;

    //     }, function error(err) {
    //         $scope.loading = false;
    //         console.log(err);
    //     });
    // };

    // $scope.getMovie = function(id) {
    //     $scope.loading = true;
    //     Films.get({ id: id }, function success(data) {
    //         $scope.films = [data];
    //         $scope.loading = false;
    //     }, function error(err) {
    //         console.log(err);
    //         $scope.loading = false;

    //     });
    // };

}]);
