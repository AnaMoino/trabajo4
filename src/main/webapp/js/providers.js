/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var module = angular.module('myApp.providers', []);

module.provider("buscarRepos", function () {
    var url;
    return {
        setUrl: function (value) {
            url = value;
        },
        $get: function ($http) {
            var buscarRepos = {};
            
            buscarRepos.buscar = function (nombre, actualizar) {
                var urlBusqueda= url+ '/users/'+nombre.toLowerCase()+'/repos';
        
                $http({method:'GET', url:urlBusqueda})
                    .then(function success(response){
                      actualizar(response.data);
                    }, function error(response){
                      actualizar(null);
                    });
            };
            
            buscarRepos.detalleCommits = function (nombre, repositorio, actualizar) {
                var urlBusqueda= url + '/repos/' + nombre.toLowerCase() + '/' + repositorio.toLowerCase() + '/commits';
                console.log(urlBusqueda);
                $http({method:'GET', url:urlBusqueda})
                    .then(function success(response){
                      actualizar(response.data);
                    }, function error(response){
                      actualizar(null);
                    });
            };
        
            return buscarRepos;
        }
    };
});

module.config(function (buscarReposProvider) {
    buscarReposProvider.setUrl("https://api.github.com");
});


