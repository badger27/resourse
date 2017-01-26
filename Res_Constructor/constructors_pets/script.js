

//Basic Constructor Objects

function Cat(color, name ) {
    this.color = color
    this.name = name
}
var cat = new Cat("white", "fluffy");
console.log(cat);

////////////////////////




//Properties are only value hooks.
var hen ={
    name: {first :"fluffy", last:"freir"}
};

Object.defineProperty(hen, 'fullname',{
    get:function () {
    return this.name.first + ' ' + this.name.last
    },
    set:function (value) {
        var nameParts = value .split('')
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
    }
});



// Object.definePropertys(cat, 'name',{enumerable:true});

for( var propertyname in cat){}
var dog = {
    name:{first : 'fluffy', last: 'bear'},
};

Object.defineProperty(dog, 'fullname ', {get: function() {
      return  this.name.first + '' + this.name.last
                        
    }
 });
   
   
 console.log("test"  + dog.fullname);


//prototype
function Animal (voice) {

    this.voice = voice || 'grunt';

}

Animal.prototype.speck = function () {
    alert("roar");
}

function wolf (name, color) {
    Animal.call(this, 'Moew')
    this.name = name;
    this.color = color

}

wolf.prototype.age =3;

wolf.prototype = Object.create(Animal.prototype);


var ben  = new wolf('ben', 'black');
var fluffy  = new wolf('fluffy', 'black');

fluffy.age =5 ;

fluffy.speck();
console.log("fluffy:"  , fluffy );

console.log(ben.age);
console.log("fluffy.age:" + fluffy.age);
console.log("fluffy.__proto__:" + fluffy.__proto__.age);

console.log("wolf.prototype" , wolf.prototype);
console.log("ben_proto_" ,  ben.__proto__);
console.log(wolf.prototype === ben.__proto__);

 //getter and setters
