render()

function set(ligne, colonne, joueur){
    for(i = 0; i<ligne; i++){
        var ligne = document.createElement('tr')
        for(j=0; j<colonne; j++){
            var colonne = document.createElement('td')
            colonne.appendChild(ligne)
        }
        ligne.appendChild('table')
    }
}

function render(){
    var temp = document.querySelector("div")
    temp.innerHTML = 'y'
    var gameBoard = document.createElement('table')
    gameBoard.appendChild("div")
    set(6, 7, 1)
}