let currentPlayer = 1;

function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.getElementById("position");
    tbl.innerHTML = "";
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 6; i++) {
        // creates a table row
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const cell = document.createElement("td");
            row.appendChild(cell);
            cell.setAttribute("id", `${i}${j}`);
            cell.setAttribute("onclick", 'changeCellColor(this.id)');

        }
        // add the row to the end of the table body
        tblBody.prepend(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("id", "position");
}
function freeCell(cellId) {
    let idCol = Array.from(cellId)[1]
    for (let i = 0; i < 7; i++) {
        let curCell = document.getElementById(i.toString() + idCol)
        j = i + 1
        let maxCell = document.getElementById('5' + idCol)
        console.log(i.toString() + idCol)
        if (j < 7) {
            if (maxCell.className == 'Joueur1' || maxCell.className == 'Joueur2') {
                alert('Column already full')
                break
            }
            else if (curCell.className.length === 0) {
                curCell.className = `Joueur${currentPlayer}`;
                if (currentPlayer == 1) {
                    currentPlayer = 2
                }
                else {
                    currentPlayer = 1
                }
                break
            }
        }
    }
}
function checkVictory(cell){
    
}
function changeCellColor(cell) {
    temp = document.getElementById(cell);
    freeCell(cell)
    checkVictory(cell)
}

const button = document.getElementById("myButton");
button.addEventListener("click", generateTable);