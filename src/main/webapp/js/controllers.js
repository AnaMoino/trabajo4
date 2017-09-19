/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp.controllers', ['myApp.providers',
                                     'myApp.directives',
                                     'myApp.factories'])
  .controller('mainController', function($scope, buscarRepos, buscarUsuario) {

    var usuario = function(response){
        $scope.userData = response;
        buscarRepos.buscar($scope.nameUser, repositorio);
    }

    var repositorio = function(response){
        $scope.reposData = response;
    }

    var detalleRepositorio = function(response){
        $scope.repoCommits = response;
    }

    $scope.buscarUsuarioGit = function(){
        $scope.userData = {};
        buscarUsuario.buscar($scope.nameUser, usuario);
    };

    $scope.verDetallesRepo = function(repoName){
        buscarRepos.detalleCommits($scope.nameUser, repoName, detalleRepositorio);
    };
});
                                 


