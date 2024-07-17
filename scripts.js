const result = document.querySelector('.result')

const playerScore = document.querySelector('.player-score-value')
const computerScore = document.querySelector('.computer-score-value')

let humanScoreNumber = 0
let computerScoreNumber = 0

const playHuman = (humanChoice) => {
    event.preventDefault();
  
   
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)
    return choices[randomNumber]
}
const playTheGame = (human, machine) => {
    console.log('humano: ' + human + '  maquina: ' + machine)



    if (human === machine) {
    result.innerHTML = 'Deu empate :('
    } else if ( (human === 'paper' && machine ==='rock') || 
    ( human === 'rock' && machine === 'scissors') || 
    (human === 'scissors' && machine === 'paper')){
        
        humanScoreNumber ++
        result.innerHTML = 'Voce ganhou'
        playerScore.innerHTML = (humanScoreNumber) 

    } else {
        computerScoreNumber++
    result.innerHTML = 'Voce perdeu'}
    computerScore.innerHTML = (computerScoreNumber) 
}
