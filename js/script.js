let currentPlayer =1;

function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.getElementById("position");
    tbl.innerHTML = "";
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 2; i++) {
        // creates a table row
        const row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const cell = document.createElement("td");
            row.appendChild(cell);
            cell.setAttribute("id", `${i}${j}`);
            cell.setAttribute("onclick", 'changeCellColor(this.id)');

        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("id", "position");
}

function changeCellColor(cell) {
    temp = document.getElementById(cell);
    if(!temp.className){
        temp.className=`Joueur${currentPlayer}`;
        if(currentPlayer == 1){
            currentPlayer = 2
        }
        else{
            currentPlayer = 1
        }
        console.log(temp.className)
    }
    else{
        console.log("cell not empty")
    }
}
function displayCell(cell){
    console.log(cell)
}
const button = document.getElementById("myButton");
button.addEventListener("click", generateTable);