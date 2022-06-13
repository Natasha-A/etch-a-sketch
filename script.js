
/* Constants and variables */
const container = document.getElementById("grid-container");
const cells = container.childNodes;
let colorMode = null;
let colorPicked = "#d0a3f5"; // set default value
let colorPicker = document.getElementById("paintColor");
const buttons = document.querySelectorAll(".grid-buttons")
const paintBtn = document.getElementById("button-1");
const bgFillBtn = document.getElementById("button-2");
const clearBtn = document.getElementById("btn-clear")
// Rainbow Colours Arrays - using two selected palettes
let rainbowColoursA = ["#007FAA","#059FCF", "#74DEF4", "#DDF3F1",
"#05E3EF", "#04B9CE", "#0398A7", "#035D0A", "#2B8012", "#93CB4C",
 "#C7FDEA","#02C6B7", "#00705A", "#004D5D", "#F42B41", "#FF2D49", "#FEDA2C", "#FFEE9C", "#FFAD24", "#FD5917", "#FF3214", "#DB286F",
"#FC2E66", "#FF489A", "#FAD6E0", "#FE8CC8", "#FF50AD", "#A81C52"]
let rainbowColoursB = ["#FCFB83","#FFE477", "#FFD12A", "#FEBE27",
"#88DE6F", "#56C23C", "#01A72F", "#43A39C", "#4C8771", "#006678",
 "#FECDE6","#FEC0C1", "#FF8B9E", "#FE7982", "#FE2E44", "#D9240F", "#EFBC8D", "#F6A54E", "#C6410F", "#A4E8DF", "#65E9F8", "#00C2EC",
"#009EDC", "#0188D3", "#5AA9F0", "#279AFC", "#0066B1", "#063CB9", "#002C6F"]
let rainbowColorsCombined = rainbowColoursA.concat(rainbowColoursB)


// Button Panel Events
btnClicked = "";


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    btnClicked = e.target.id;
    console.log(btnClicked)

    if (btnClicked === "button-1") {
      console.log("Paint button pressed");
      selectBtn(btnClicked)
    }

    if (btnClicked === "button-2") {
      console.log("Fill button pressed");
      selectBtn(btnClicked)
    }

    if (btnClicked === "button-3") {
      console.log("paint rainbow button pressed");
      selectBtn(btnClicked)
    }

    if (btnClicked === "button-4") {
      console.log("erase = button pressed");
      selectBtn(btnClicked)
    }

    clearBtn.addEventListener('click', clearCells);

  });
});


// Watch for color picker value and set variable
function watchColorPicker(event) {
  colorPicked = event.target.value;
}
colorPicker.addEventListener("change", watchColorPicker, false);


// Display value for range slider
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


function selectBtn(btn) {

  // Paint cells
  if (btn === "button-1") {
    console.log("painting pixels option")
    cells.forEach((cell) => {
      cell.addEventListener('mouseenter', paintCellColor)
      cell.removeEventListener('click', paintBackground);
      cell.removeEventListener('mouseenter', paintCellRainbowColor);
      cell.removeEventListener('click', clearCells);
      cell.removeEventListener('mouseenter', eraseCell)

    });
  }

  // Paint background
  if (btn === "button-2") {
    console.log("painting background option");
    cells.forEach((cell) => {
      cell.addEventListener('click', paintBackground);
      cell.removeEventListener('mouseenter', paintCellColor);
      cell.removeEventListener('mouseenter', paintCellRainbowColor);
      cell.removeEventListener('click', clearCells);
      cell.removeEventListener('mouseenter', eraseCell)

    })
  }

  // Paint cells rainbow
  if (btn == "button-3") {
    console.log("rainbow background option");
    cells.forEach((cell) => {
      cell.addEventListener('mouseenter', paintCellRainbowColor);
      cell.removeEventListener('mouseenter', paintCellColor);
      cell.removeEventListener('click', paintBackground);
      cell.removeEventListener('click', clearCells);
      cell.removeEventListener('mouseenter', eraseCell)

    })
  }

  // Erase cell colors
  if (btn == "btn-clear") {
    console.log("erase  option");
    cells.forEach((cell) => {
      cell.addEventListener('click', clearCells)
      cell.removeEventListener('mouseenter', paintCellRainbowColor);
      cell.removeEventListener('mouseenter', paintCellColor);
      cell.removeEventListener('click', paintBackground);
      cell.removeEventListener('mouseenter', eraseCell)

      
    })
  }

      // Erase cell colors
  if (btn == "button-4") {
    console.log("erase  option");
    cells.forEach((cell) => {
      cell.addEventListener('mouseenter', eraseCell)
      cell.removeEventListener('mouseenter', paintCellRainbowColor);
      cell.removeEventListener('mouseenter', paintCellColor);
      cell.removeEventListener('click', paintBackground);

    })
  }

}
// Color Panel Functionalities 
function paintCellColor() {
  event.target.style.backgroundColor = colorPicked;
}


function paintCellRainbowColor() {
  event.target.style.backgroundColor = rainbowColorsCombined[Math.floor(Math.random()*(rainbowColorsCombined.length)) + 1]
}

function paintBackground() {
  cells.forEach((cell) => {
    cell.style.background = colorPicked
  });
}

function clearCells() {
  cells.forEach((cell) => {
    cell.style.background = "#FFFFFF"
  });
}

function eraseCell() {
  event.target.style.backgroundColor = "#FFFFFF";

}



// Load default grid on page
window.onload = makeDefaultGrid();