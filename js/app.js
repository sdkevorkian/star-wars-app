/*global angular*/
angular.module('StarWarsApp', ['ngResource'])

.factory('Films', ['$resource', function($resource) {
    return $resource('http://swapi.co/api/films/:id', {}, {
        query: { isArray: false }
    });
}])

.controller('FilmsCtrl', ['$scope', 'Films', function($scope, Films) {
    $scope.movieId = 1;
    $scope.films = [];
    $scope.loading = false;

    $scope.getAll = function() {
        $scope.loading = true;
        Films.query(function success(data) {
            $scope.films = data.results;
            $scope.loading = false;

        }, function error(err) {
            $scope.loading = false;
            console.log(err);
        });
    };

    $scope.getMovie = function(id) {
        $scope.loading = true;
        Films.get({ id: id }, function success(data) {
            $scope.films = [data];
            $scope.loading = false;
        }, function error(err) {
            console.log(err);
            $scope.loading = false;

        });
    };
}]);
