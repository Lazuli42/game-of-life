var columns = [];
var rows = [];

for (var x = 0; x < 7; x++) {
  columns.push(x);
}

for (var y = 0; y < 5; y++) {
  rows.push(y);
}

console.log(columns);
console.log(rows);

var liveCells = [{x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}];
console.log(liveCells);

for (var i = 0; i <= columns.length; i++) {
  for (cell of liveCells) {
    if (cell.x === i) {
      console.log("yes");
    }
  }
}

for (var i = 0; i <= rows.length; i++) {
  for (cell of liveCells) {
    if (cell.y === i) {
      console.log("yeah");
    }
  }
}

for (cell of liveCells) {

}

function checkNeighbors(x, y) {
  if (x)
}
