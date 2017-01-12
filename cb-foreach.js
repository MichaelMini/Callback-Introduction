// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }


// function actionWhenFound() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// var array = ["Alice", "Bob", "Waldo", "Winston"];

// function findEach(arr, found){
// 	var index = 0;
// 	index += 1;
// 	if (arr[index] === "Waldo") {
// 	  found();   // execute callback
// 	}
// }

function actionWhenFound(i) {
  console.log('Found Waldo at index ' + i +'!');
}

// array.forEach(findEach(array, actionWhenFound));


var arr = ["Alice", "Bob", "Waldo", "Winston"];
arr.forEach( function(entry, i) {
	if (entry === "Waldo") {
    actionWhenFound(i);   // execute callback
  }
});
