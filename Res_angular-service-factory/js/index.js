var app = angular.module('myApp', []);


app.service('todoListService', function () {
    
//     var this = {};
this.todolist=[];
this.adTodo = function (todo){
    
};
this.removeTodo = function (){
    
};
//    return this  
    
});

app.factory("todoListFactory ", function () {
    
    var obj ={}
    obj.todoList =[];
    obj.addTodo= function (todo) {
        
    }
    
    obj.removeTodo = function (todo){
        
    }
    return obj;
    
} );

app.controller('todoCtrl' ,function (Todo, todoListService, todoListFactory) {
    
});

app.factory('Todo', function () {
    
    return{
        description: description , 
        priority: priority,
        complete: function () {
            
        }
    }
        
        }) 
    
