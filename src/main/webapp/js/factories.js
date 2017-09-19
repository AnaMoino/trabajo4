/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var module = angular.module('myApp.factories', []);

function buscarUsuario($http) {
    /*variable a donde se pondra el resultado*/
    var buscarUsuario = {};
    buscarUsuario.buscar = function (nombre, actualizar) {
        var url = "https://api.github.com/users/" + nombre.toLowerCase();
        
        $http({method: 'GET', url: url})
                .then(function success(response) {
                    actualizar(response.data);
                }, function error(response) {
                    actualizar(null);
                });
    };

    return buscarUsuario;
}

module.factory('buscarUsuario', buscarUsuario);


