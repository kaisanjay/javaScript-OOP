function newName(name){
    var object = {};
    object.name=name;
    object.age= 21;
    object.location= "india";
    object.greeting= function(){
        alert("hello" + this.name)
    };
	return object;
};

var sanjay= newName("sanjay");




function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}



var salva = createNewPerson('Salva');
salva.name;
salva.greeting();




/* This works well enough, but it is a bit long-winded;
 if we know we want to create an object,
 why do we need to explicitly create a new empty object and return it?
 Fortunately JavaScript provides us with a handy shortcut,
 in the form of constructor functions — let's make one now!

*/


function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

/*The constructor function is JavaScript's version of a class.
 You'll notice that it has all the features you'd expect in a function,
 although it doesn't return anything or explicitly create an object —
 it basically just defines properties and methods.
 You'll see the this keyword being used here as well — 
 it is basically saying that whenever one of these object instances is created,
 the object's name property will be equal to the name value passed to the constructor call, and the greeting() method will use 
 the name value passed to the constructor call too.
*/




/* So how do we call a constructor to create some objects? */

var person1 = new Person('Bob');
var person2 = new Person('Sarah');




/* 
In each case, the    new     keyword is used to tell the browser we want to create a new object instance,
 followed by the function name with its required parameters contained in parentheses,
  and the result is stored in a variable — very similar to how a standard function is called.
*/


/*
{
  name: 'Bob',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}




{
  name: 'Sarah',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}


*/




/*
Note that when we are calling our constructor function,
 we are defining greeting() every time, which isn't ideal.
 To avoid this, we can define functions on the prototype instead, which we will look at later.
*/
