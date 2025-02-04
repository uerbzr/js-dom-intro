const container = document.querySelector(".container");

//const cellValues = ['O','X','X','X','O','X','O','X','O']
//const cellValues = [null, null, null, null, null, null, null, null, null]
const cellValues = Array(9).fill(null);
let lastValue = ["X", "O"];

function drawBoard() {
  container.innerHTML = "";

  for (let x = 0; x < 9; x++) {
    //create cell
    const cell = document.createElement("div");
    //add css class for cell
    cell.classList.add("cell");
    console.log(cell);

    //set symbol to contents of array
    const symbol = document.createElement("p");
    symbol.classList.add("symbol");
    symbol.innerText = cellValues[x];

    cell.addEventListener("click", function () {
      lastValue.reverse();
      cellValues[x] = lastValue[0];
      drawBoard();
      console.log(x);
      console.log(cellValues);
    });

    container.append(cell);
    cell.append(symbol);
  }
}

drawBoard();
