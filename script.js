// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementsByTagName("table")[0];
    let row = document.createElement("tr");
    
    if (numCols === 0) {
        let cell = document.createElement("td");
        cell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(cell);
        numCols = 1;
    } else {
        for (let i = 0; i < numCols; i++) {
            let cell = document.createElement("td");
            cell.onclick = function() {
                this.style.backgroundColor = colorSelected;
            };
            row.appendChild(cell);
        }
    }
    
    table.appendChild(row);
    numRows++;
}

// Add a column
function addC() {
    let table = document.getElementsByTagName("table")[0];
    
    if (numRows === 0) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(cell);
        table.appendChild(row);
        numRows = 1;
    } else {
        let rows = table.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            let cell = document.createElement("td");
            cell.onclick = function() {
                this.style.backgroundColor = colorSelected;
            };
            rows[i].appendChild(cell);
        }
    }
    numCols++;
}

// Remove a row
function removeR() {
    if (numRows > 0) {
        let table = document.getElementsByTagName("table")[0];
        table.deleteRow(numRows - 1);
        numRows--;
        
        if (numRows === 0) {
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    if (numCols > 0) {
        let table = document.getElementsByTagName("table")[0];
        let rows = table.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            rows[i].deleteCell(numCols - 1);
        }
        numCols--;
        
        if (numCols === 0) {
            table.innerHTML = "";
            numRows = 0;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor === "" || 
            cells[i].style.backgroundColor === "white") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
}