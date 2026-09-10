// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
const oddOnly = scores.filter(x => x % 2 !== 0);
console.log("odd:", oddOnly);

const doubled = oddOnly.map(x => x * 2);
console.log("doubled:", doubled);

const sorted = doubled.sort((a, b) => b - a);
console.log("sorted desc:", sorted);

const half = sorted.slice(0, Math.ceil(sorted.length / 2));
console.log("first half:", half);

// (b)
const result = scores
  .filter(x => x % 2 !== 0)
  .map(x => x * 2)
  .sort((a, b) => b - a)
  .slice(0, Math.ceil(scores.filter(x => x % 2 !== 0).length / 2));

console.log("pipeline result:", result);

// (c)
console.log("end:", scores);
//여전히 같다. filter, map, slice는 새 배열을 만든 것이라 원본배열은 건드리지 않음.
