//figure out algorithmic complexity
//test ALL EDGE CASES
//print with /n newline

//comment out code

//write solution to stdout

var _ = require('underscore');
process.stdin.setEncoding('utf8'); 

process.stdin.on('data', function(data){
	var logArr = data.split("\n");
	var count = logArr[0]

	var pairs = [];
	var qualifyingPairs = [];
	// console.log(findPairs(logArr[1].split(',')))

	for (var i=1; i<logArr.length; i++){
		findPairs(logArr[i].split(','));
	}

	console.log(pairs);

	function findPairs(set){ // find all possible pairs
		if (set.length < 2) { 
			return
		} else if (set.length === 2) {
			pairs.push([set[0] + ", " + set[1]]);
		} else {
			for (var i = 0; i < set.length - 1; i++){
				for (var j = 1; j < set.length - i; j++){
					pairs.push(set[i] + ", " + set[i+j]);
				}
			}
		}			
	}

	_.groupBy(pairs, function(num){ r
		eturn Math.floor(num); 
	});

	// process.stdout.write(sortedPairs + '\n');
})

// var readline = require('readline'); //allow to read line by line
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', function(line){
// 	console.log(line)
// })


// process.stdout.write()



