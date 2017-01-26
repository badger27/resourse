(function(){
"use strict";

var module = angular.module("psMovies");


    function  fetchMovies($http) {
        return $http.get("player.json")
            .then(function (response) {
            return response.data;

        });

    }

    function  controller ($http) {
        var model = this;


        model.$onInit = function(){

        fetchMovies($http).then(function(players) {

            console.log("players" ,players);
            model.players = players;
        });
       }

       model.upRating = function (player) {

            if(player.rating < 5 ) {
                player.rating += 1 ;
            }
        }

        model.downRating = function (player) {
            if(player.rating > 1 ) {
                player.rating -= 1 ;
            }
        }
      }

module.component('playerList',{

    templateUrl : "ps-movies/movie-list.component.html ",
    controllerAs: "model",
    controller: ["$http" , controller]

    });



}());