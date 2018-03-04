// we made a constructor
// constructor ke sath prototype apne aap ban jata hai !!!
function Employee(name){
	this.name= name;
};


// make a new object emp1 from that class

var emp1 = new Employee("sanjay");


var emp2 = new Employee("Rajjo");


// we want to add some method to object

// but we change the prototype not the actual one.

Employee.prototype.playpranks= function(){console.log("Prank is played!!")};


Employee.prototype.playpranks();

// we can acess this info via new objects also


emp1.playpranks()


emp2.playpranks()
