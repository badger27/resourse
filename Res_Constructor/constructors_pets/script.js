"use strict "

//Constructor Objects 
function Cat(color, name ) {
    this.color = color
    this.name = name
}
var cat = new Cat("white", "fluffy");
console.log(cat);



var dog = {
    name:{first : 'fluffy', last: 'bear'},
};

Object.defineProperty(dog, 'fullname ', {get: function() {
      return  this.name.first + '' + this.name.last
                        
    }
 });
   
   
 console.log("test"  + dog.fullname);
