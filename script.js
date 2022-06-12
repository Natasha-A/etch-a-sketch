
/* Constants and variables */
const container = document.getElementById("grid-container");
const cells = container.childNodes;
let colorMode = null;
let colorPicked = "#d0a3f5"; // set default value
let colorPicker = document.getElementById("paintColor");
const buttons = document.querySelectorAll(".grid-buttons")
const paintBtn = document.getElementById("button-1");
const bgFillBtn = document.getElementById("button-2");


btnClicked = "";





/* Check for button clicked 

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    btnClicked = e.target.id;
    console.log(btnClicked)

    if (btnClicked === "button-1") {
      console.log("Paint button pressed");
      paintBtn.addEventListener('click', paintPixels);
    } 

    if (btnClicked === "button-2") {
      console.log("Fill button pressed");
      //console.log("event removed")
      bgFillBtn.addEventListener('click', paintBackground);
    } 
  
  });
});
*/


paintBtn.addEventListener('click', paintPixels);

bgFillBtn.addEventListener('click', paintBackground);

/* Watch for color picker value and set variable*/
function watchColorPicker(event) {
   colorPicked = event.target.value;
}
colorPicker.addEventListener("change", watchColorPicker, false);


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
};


/* Paints over pixel cells individually */
function paintPixels() {
  console.log("painting pixels")
  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', addColor)
    cell.removeEventListener('click', paintBackground);

    });
  }

  function addColor() {
      event.target.style.backgroundColor = colorPicked;
  }

/*
  setTimeout(() => {
    cells.forEach((cell) => {
      cell.removeEventListener('mouseenter', addColor);
    });  
    console.log("removed")
  }, 2000)
*
  

/* Paint entire background */
function paintBackground() {
  console.log("filling background")
  cells.forEach((cell) => {
    cell.removeEventListener('mouseenter', addColor);
    cell.addEventListener('click', (e)=>{
      cells.forEach((x) => {
      x.style.background = colorPicked;
      });
    });
});
}




  // Load default grid on page
window.onload = makeDefaultGrid();