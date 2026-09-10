// P1. Predict the output  (commit: "p1: equality predictions")
//
// For each line, write your prediction in the comment BEFORE running.
// Then run:  node p1_predict.js
// Wrong predictions are the point. For every miss, add one line
// explaining why, and commit.

console.log(1, 1 == "1");            // prediction:true/O
console.log(2, 1 === "1");           // prediction:false/O
console.log(3, 0 == "");             // prediction:true/O
console.log(4, 0 === "");            // prediction:false/O
console.log(5, "" == " ");           // prediction:false/O
console.log(6, null == undefined);   // prediction:true/O
console.log(7, null === undefined);  // prediction:false/O
console.log(8, "4" - true);          // prediction:3/O
console.log(9, "4" + 1);             // prediction:41/O
console.log(10, "4" * "2");          // prediction:8/O
console.log(11, typeof "4");         // prediction:"string"/O
console.log(12, typeof null);        // prediction:"null"/X
console.log(13, typeof []);          // prediction:"object"/O
console.log(14, [1, 2] == [1, 2]);   // prediction:true/X
console.log(15, NaN === NaN);        // prediction:true/X
