(function(){
"use strict";


var module = angular.module("psMovies");

module.component('movieRating', {

    templateUrl: "ps-movies/movie-rating.component.html",
    bindings:{
        value: "<"
    },
    transclude:true,
    controllerAs: "model",
    controller: function () {
        var model = this;

        model.$onInit= function () {
            model.entries =  new Array(model.value)
            console.log(" Oninit-model.entries" , model.entries);
        };

        model.$onChanges =function () {
            model.entries  = new Array(model.value);
            console.log(" onChange-model.entries" , model.entries);
        };
    }

});

console.log("module.component",module.component);

}());