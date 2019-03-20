var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;

//Write a while loop that prints out the contents of ingredients:
console.log("ingredients:");
while (repeat < ingredients.length) {
  console.log(ingredients[repeat])
  repeat++;
}


//Write a for loop that prints out the contents of ingredients:
console.log("ingredients:");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("ingredients:");
for (var i = (ingredients.length - 1); i >= 0; i--) {
  console.log(ingredients[i]);
}

var reverse = ingredients.length - 1
console.log("ingredients");
while (reverse >= 0) {
  console.log (ingredients[reverse])
  reverse--;
}