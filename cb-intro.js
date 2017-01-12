// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}


function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

function findEach(arr, found){
	if (arr[i] === "Waldo") {
	  found();   // execute callback
	}
}

["Alice", "Bob", "Waldo", "Winston"].forEach(findEach(arr, found));