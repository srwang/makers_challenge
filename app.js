//node v0.12.5

var _ = require('underscore');
process.stdin.setEncoding('utf8'); 

process.stdin.on('data', function(data){ //reading data from input
	var logArr = data.split("\n");
	var count = parseInt(logArr[0]) //grabbing N from the first line

	var pairs = [];
	var qualifyingPairs = "";

	for (var i=1; i<logArr.length; i++){ // sort logs line by line
		var individualLog = _.uniq(logArr[i].split(',').sort(), true);
		findPairs(individualLog);
	}

	function findPairs(set){ // find all possible pairs
		if (set.length < 2) { 
			return
		} else if (set.length === 2) {
			pairs.push([set[0] + "," + set[1]]);
		} else {
			for (var i = 0; i < set.length - 1; i++){
				for (var j = 1; j < set.length - i; j++){
					pairs.push(set[i] + "," + set[i+j]);
				}
			}
		}			
	}

	pairs = pairs.sort(); 

	var pairCount = 1; //store a pairCount variable to see how many instances of the same pair occur
	var prevPair = pairs[0];

	for (var i=1; i<pairs.length; i++){ 
		if (pairs[i] === prevPair) {
			pairCount ++;
			if (pairCount === count) { //write to string if N instances of pair
				qualifyingPairs += pairs[i] + "\n";
			}
		} else {
			pairCount = 1;
			prevPair = pairs[i];
		}
	}

	process.stdout.write(qualifyingPairs);
})

//Extra
//time complexity is 0(n)^3, deepest is 3 nested loops (at line 20)
//not sure, this is the solution I came up with



