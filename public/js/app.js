/**
 * Created by lantran on 5/26/14.
 */
angular.module('flickr', ['ngRoute', 'flickrServices'] )
    .config(flickrRouter);

function flickrRouter($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'partials/main.html',
            controller: function($scope){
            }
        })
        .when('/:id',{
            templateUrl: 'partials/main.html',
            reloadOnSearch:true,
            controller: function($scope, $routeParams, $location){
                $scope.setCurrentPhoto($routeParams.id);
                if(!$scope.currentPhoto || $scope.loading){
                    $location.path('/');
                    return;
                }
                $scope.openModal();
            }

        })
}