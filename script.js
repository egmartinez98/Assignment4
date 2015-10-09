//step 1
/*var Animal = Animal || {};
Animal.Cat = {};
Animal.Dog = {};*/

//step 2
/*var Cat = function() {};

function Dog() {};*/

//step 3
/*var myDog = new Cat;
var myCat = new Dog;*/

//step 4
/*function Animal () {
    window.console.log("The Animal has been created");
};

var Cat = new Animal();*/

//step 5
/*function Animal (word) {
    window.console.log(word);
};

var Cat = new Animal("string");*/

//step 6 
/*Start over and now create a new class using Constructor notation syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. */

/*function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

var info = new Animal("wolverine", "I don't know", "Black", "10ft", "20ft");
window.console.log(info);*/


//step 7
/*Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.*/

/*function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

var info = new Animal("wolverine", "I don't know", "Black", "10ft", "20ft");
var i;
for (i in info) {
    if (info.hasOwnProperty(i)) {
        window.console.log(info[i]);
    }
}*/


//step 8
//Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

/*function Speak(type, color) {
    "use strict";
    this.type = type;
    this.color = color;
    if (type === "dog") {
        window.console.log("The " + color + " dog is barking!");
    } else if (type === "cat") {
        window.console.log("The " + color + " cat is meowing!");
    }
    
}

//var dog = new Speak("dog", "black");
var cat = new Speak("cat", "white");*/

/*step 9
Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”*/


/*function Speak(type, color) {
    "use strict";
    this.type = type;
    this.color = color;
    if (type === "dog") {
        window.console.log("The " + color + " dog is barking!");
    } else if (type === "cat") {
        window.console.log("The " + color + " cat is meowing!");
    }
    
}

//var dog = new Speak("dog", "black");
var cat = new Speak("cat", "white");*/




//step 10
/*Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.*/



/*String.prototype.findwords = function () {
    "use strict";
    var p = "This is a random paragragh of text. Yup I dont know what to right.";
    window.console.log(p.search("Yup"));
};*/









//Does My Vehicle Need An Oil Change?

/*step 11
Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).*/

/*function Vehical(make, model, totalMiles, lastOilChange) {
    
}*/

/*step 12
Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.*/

/*function Vehical(make, model, totalMiles, lastOilChange, drivenMiles, type) {
    "use strict";
    this.make = make;
    this.model = model;
    this.totalMiles = totalMiles;
    this.lastOilChange = lastOilChange;
    this.drivenMiles = 0;
    this.type = "";
}*/

/*step 13
Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).*/










//The Recipe Card

/*
Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper
*/

/*var recipe = {title: "Guacomole", servings: 4, ingredients: ["- 3 Avocados", "- 1 Lime", "- 1 Teaspoon Salt", "- 1/2 Cup Onion", "- 3 Tablespoons Cilantro", "- 2 Dice Tomatoes", "- 2 Diced Tomatoes", "- 1 Teaspoon Garlic", "- 1 Pinch Ground Pepper"]};
window.console.log(recipe.title);
window.console.log("Serves: " + recipe.servings);
window.console.log("Ingredients:");
var i;
for (i = 0; i < recipe.ingredients.length; i += 1) {
    window.console.log(recipe.ingredients[i]);
}*/









/*The Reading List
Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.*/

/*var books = [{title: "Hunger Games", author: "Suzanne Collins", alreadyRead: false},
             {title: "THe Hobbit", author: "J.R.R", alreadyRead: false},
             {title: "The Lord of the Rings", author: "J.R.R", alreadyRead: false},
             {title: "Star Wars", author: "G.L", alreadyRead: false},
             {title: "The Very Hungry Caterpillar", author: "Eric Carle", alreadyRead: true}];
var i;
for (i = 0; i < books.length; i += 1) {
    
    if (books[i].alreadyRead === true) {
        window.console.log("You already read " + "\"" + books[i].title + "\"" + " by " + books[i].author);
    } else if (books[i].alreadyRead === false) {
        window.console.log("You still need to read " + "\"" + books[i].title + "\"" + " by " + books[i].author);
    }
}*/





//Fill in the Blanks


//Fill in the blanks to make this program work.
(function () {
    "use strict";
    var person = {window.console.log("Im Rich")};

    var car = {price: 10000000};

    // print vroom vroom
    car.drive(window.console.log("vroom vroom"));

    // print 'I'm rich'
    if (car.price > 100000) {
        person.buy(car);
    }
}());


