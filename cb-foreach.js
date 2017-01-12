// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
	arr.forEach( function(entry, i) {
		if (entry === "Waldo") {
	    actionWhenFound(i);   // execute callback
	  }
	});
}

function actionWhenFound(i) {
  console.log('Found Waldo at index ' + i +'!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

