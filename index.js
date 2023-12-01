function createUser(name , event) {
 return {name}
}

const player1 = createUser("X")
const player2 = createUser("O")

let square = Array.from(document.querySelectorAll('div'))
let output = document.getElementById('output')
let counter = 0;
let currentPlayer = player1
let runPlayerMarker = true;
const playerMarker = (event) => {
 if(currentPlayer === player1 && event.target.textContent !== "O" && runPlayerMarker) {
   event.target.textContent = "X"
   output.textContent = "Player O's Turn"
     currentPlayer = player2 
 }else if(event.target.textContent !== "X" && runPlayerMarker){
     event.target.textContent = "O"
     output.textContent = "Player X's Turn"
    currentPlayer = player1
}
counter++;
checkWinner(square)
}

const checkWinner = (square) => {
  let combs = [
    [0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
  ]
  
  
  for(const comb of combs) {
    const [a , b , c] = comb
   if(square[a] &&
      square[b] &&
      square[c] &&
      square[a].textContent === square[b].textContent && 
      square[b].textContent === square[c].textContent && 
      square[a].textContent !== ""){
        if(currentPlayer === player2) {
          output.textContent = "Player X Wins"
        }else if(currentPlayer === player1){
          output.textContent = "Player O Wins"
        }
        runPlayerMarker = false;
        return;
    }else if(counter === 9 && runPlayerMarker){
      output.textContent = "It's a Draw"
    }
  }
}



for(let j = 0 ; j< square.length ; j++){
    square[j].classList.add('square')
    square[j].addEventListener('click' , playerMarker)

}



function startNewGame() {    
  const reset = document.querySelector('#reset')
  runPlayerMarker = true;
  output.textContent = ""
for(let i = 0 ; i<square.length ; i++) {
    square[i].textContent = ""
}
}
reset.addEventListener('click' , startNewGame)




