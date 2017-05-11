/*global angular*/
// ngResource was on our top level, but only needs to be here
var services = angular.module('StarWarsServices', ['ngResource']);

services.factory('Films', ['$resource', function($resource) {
    // $resource handles .get to api and knows to put in passed parameter into url
    return $resource('http://swapi.co/api/films/:id', {}, {
        query: { isArray: false }
    });
}]);
