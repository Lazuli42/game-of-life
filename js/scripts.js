var cellsToDie = [];
var CellsToBeBorn = [];
var newCells = [
  0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0,
];

function beginGameOfLife() {
  var cells = newCells;

  for (var i = 0; i <= cells.length; i++) {
    if (cells[i] === 1) {
      var neighbors = 0;

      if (cells[i-8] === 1) {
        neighbors += 1;
      }
      if (cells[i-7] === 1) {
        neighbors += 1;
      }
      if (cells[i-6] === 1) {
        neighbors += 1;
      }
      if (cells[i-1] === 1) {
        neighbors += 1;
      }
      if (cells[i+1] === 1) {
        neighbors += 1;
      }
      if (cells[i+6] === 1) {
        neighbors += 1;
      }
      if (cells[i+7] === 1) {
        neighbors += 1;
      }
      if (cells[i+8] === 1) {
        neighbors += 1;
      }

      if (neighbors < 2 || neighbors > 3) {
        cellsToDie.push(i);
      }
    }

    if (cells[i] === 0) {
      var neighbors = 0;

      if (cells[i-8] === 1) {
        neighbors += 1;
      }
      if (cells[i-7] === 1) {
        neighbors += 1;
      }
      if (cells[i-6] === 1) {
        neighbors += 1;
      }
      if (cells[i-1] === 1) {
        neighbors += 1;
      }
      if (cells[i+1] === 1) {
        neighbors += 1;
      }
      if (cells[i+6] === 1) {
        neighbors += 1;
      }
      if (cells[i+7] === 1) {
        neighbors += 1;
      }
      if (cells[i+8] === 1) {
        neighbors += 1;
      }

      if (neighbors === 3) {
        CellsToBeBorn.push(i);
      }
    }
  }
  console.log(CellsToBeBorn);
  console.log(cellsToDie);
  console.log(cells);

  for (var i = 0; i <= cells.length; i++) {
    if (cells[i] === 0) {
      for (bornCell of CellsToBeBorn) {
        if (i === bornCell) {
          newCells[i] = 1;
        } else {
          newCells[i] = 0;
        }
      }
    } else if (cells[i] === 1) {
      for (doomedCell of cellsToDie) {
        if (i === doomedCell) {
          newCells[i] = 0;
        } else {
          newCells[i] = 1;
        }
      }
    }
  }
  console.log(newCells);
}

function printCells() {
  var row1 = "";
  for (var i = 0; i < 7; i++) {
    if (newCells[i] === 1) {
      row1 += "X ";
    } else {
      row1 += "- ";
    }
  }
  $(".row1").text(row1);

  var row2 = "";
  for (var i = 7; i < 14; i++) {
    if (newCells[i] === 1) {
      row2 += "X ";
    } else {
      row2 += "- ";
    }
  }
  $(".row2").text(row2);

  var row3 = "";
  for (var i = 14; i < 21; i++) {
    if (newCells[i] === 1) {
      row3 += "X ";
    } else {
      row3 += "- ";
    }
  }
  $(".row3").text(row3);

  var row4 = "";
  for (var i = 21; i < 28; i++) {
    if (newCells[i] === 1) {
      row4 += "X ";
    } else {
      row4 += "- ";
    }
  }
  $(".row4").text(row4);

  var row5 = "";
  for (var i = 28; i < 35; i++) {
    if (newCells[i] === 1) {
      row5 += "X ";
    } else {
      row5 += "- ";
    }
  }
  $(".row5").text(row5);
}

$(document).ready(function() {
  printCells();
  $(".continueButton").click(function() {
    beginGameOfLife();
    printCells();
  });
});
