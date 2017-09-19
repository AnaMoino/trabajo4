/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var module = angular.module('myApp.directives', []);

module.directive('myRepoDetail', function() {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment
        templateUrl: 'detalle-repo.html',
        link: function ($scope, element, attrs) {
            
        }
    };
});

