function getComputerCoice() {

    let wordOfChoice = []
    wordOfChoice[0] = "Rock"
    wordOfChoice[1] = "Paper"
    wordOfChoice[2] ="Scissor"
    
    //This'll Generate a random number between 0 and the words array lenght
    let randomPick = Math.floor(Math.random()*wordOfChoice.length)
    return wordOfChoice[randomPick]
}


function playRound(playerSelection, computerSelection) {

    if (computerSelection === "rock" && playerSelection === "scissor"){
        return('You Lose! Rock beats Scissor')
    } 
    else if (computerSelection ==="scissor" && playerSelection === "rock") {
        return('You win! Rock beats scissor')
    }
     else if (computerSelection === "paper" && playerSelection === "rock") {
        return('You Lose! Paper beats Rock')
    } 
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return('You win! Paper beats Rock')
    } 
    else if (computerSelection === "scissor" && playerSelection === "paper") {
        return('You Lose! Scissor beats Paper')
    } else if(computerSelection === playerSelection){
        return(`${computerSelection} is equal to ${playerSelection}. Sorry, No winner!`)
    }
    else {
        return("You win! Scissor beats Paper")
    }
}


function playGame() {

    let iteratingCount = 0
    let playerScoreCount = 0
    let computerScoreCount = 0
    
    do {
        //do this first
        iteratingCount +=1
        alert(iteratingCount)
        GameRound = askPlayerSelection()
        
        let checkPlayerWord = 'win'
        let checkComputerWord = 'Lose'
 
        if (checkPlayerWord === GameRound.substring(4,7)) {
            
             if (playerScoreCount > 0) {
                alert(`Another point for you. You got ${playerScoreCount + 1} points!`)
             } else {
                alert(`${playerScoreCount + 1} point for you.`)
             }
             playerScoreCount +=1 
        } 
        
        else {
            if (checkComputerWord === GameRound.substring(4,8)){
                
                if (computerScoreCount > 0) {
                    alert(`Computer score, ${computerScoreCount + 1} points!`)
                 } else {
                    alert(`${computerScoreCount + 1} point for computer.`)
                 }
                computerScoreCount +=1 
            }     
        }
         }
        
        while (5 > iteratingCount); //Then continue if iterating count is not up to 5
        
    return(`Your total score is ${playerScoreCount},
    computer total score is ${computerScoreCount}`)
}
 
function askPlayerSelection() {

    playerWord = prompt('PlayerSelection: ').toLowerCase()
    computerWord = getComputerCoice().toLowerCase()
    alert(`playerWord: ${playerWord},
    computerWord: ${computerWord}`)
    
    const forGameRound = playRound(playerWord, computerWord);
    alert(forGameRound); return(forGameRound)
}
  
   

let startGame = playGame()
alert(startGame) 