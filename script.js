
/* Constants and variables */
const container = document.getElementById("grid-container");

const cells = container.childNodes;


/* Display value for range slider*/
function updateTextInput(val) {
  document.getElementById("textInput").value = val + ' x ' + val;

  makeRows(val, val);
}

/* Default grid */
function makeDefaultGrid() {
  container.style.setProperty('--grid-rows', 16);
  container.style.setProperty('--grid-cols', 16);

  container.replaceChildren();
  for (c = 0; c < (16 * 16); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item"
  };
};

/* Add (rows, cols) divs to pixel grid*/
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  container.replaceChildren();
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item"
  };

  /* Hover effect for grid divs to change cover when mouse passes over */

/*cells.forEach((cell) => {
  cell.addEventListener('mouseenter', (e) => 
  e.target.style.background = "red")
});*/

};

function paintPixels() {
  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (e) => 
    e.target.style.background = "red")
  });
}


  // Load default grid on page
window.onload = makeDefaultGrid();