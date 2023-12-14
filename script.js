console.log("Ding");


// *** Create functions if you begin to repeat yourself.

let playerHand = 0;
let dealerHand = 0;

let hit = true;
let play;
// ASK USER TO START GAME
function askUserToStartGame() {
  do {
    play = prompt(`Start a game of Blackjack? Type "play" start game.`).toLowerCase();

    if (play == "play") {
      startGame();
      } else if (play === null) {
        alert(`Maybe next time!`)
      } else {
        alert(`Please choose type play or click cancel.`);
      } 

  } while(play !== "play" && play !== null);
}

askUserToStartGame();

// if ok START GAME
function startGame() {

  playerHand = Math.floor(Math.random() *17) + 4;
  alert(`You have: ${playerHand}`)
  if (playerHand ==21) {
    blackJack();
  } else {
    dealerHand = Math.floor(Math.random() * 11) + 2;
    alert(`Dealer has: ${dealerHand}`)
    }
  }

  // start for loop to ask player if he wants to hit or stay until game ends
  for (var i = 0; playerHand <= 21; i++) {
    promptHitOrStay() 

    if (hit) {
      dealPlayer();
    } else {
      dealBot();
    }
    compareHands();

  // prompt to play again or not
  promptPlayAgain();
}

// prompt hit or stay
function promptHitOrStay() {
  hit = confirm(`You have: ${playerHand} \nDealer has: ${dealerHand} \nHit or stay? (OK to hit)`)
  return hit;
}

// generates new card
function generateCard() {
  var randomCard = Math.floor(Math.random() *11) +2;
  return randomCard;
}

// deal player new card
function dealPlayer() {
  newCard = generateCard();
  alert(`New card: ${newCard}`)
  playerHand = playerHand + newCard;
  alert(`You have: ${playerHand}`)
    if (playerHand === 21) {
    blackJack();
    } else if (playerHand > 21) {
    gameOver();
    } 
  return playerHand;
}

// deal bot new card 
function dealBot() {
  
  // for loop to keep going if dealer is less than 17
  for (var i = 0; dealerHand < 17; i++) {
    newCard = generateCard();
    alert(`Deraler's hits: ${newCard}`);
    dealerHand = dealerHand + newCard;
    alert(`Dealer has: ${dealerHand}`)

    if (dealerHand === 21) {
      gameOver();
    } else if (dealerHand > 21) {
      alert(`You have: ${playerHand} \nDealer has: ${dealerHand} \nDealer busted. Well done, you WIN!!`)
    }
  }
  return dealerHand;
}

// compare hands 
function compareHands() {
  if (playerHand > dealerHand) {
    alert(`You have: ${playerHand} \nDealer has: ${dealerHand} \nWell done, you WIN!!`)
  } else if (playerHand > dealerHand) {
    alert(`You have: ${playerHand} \nDealer has: ${dealerHand} \nSorry, you lose. Better luck next time.`)
  } else {
    alert(`You have: ${playerHand} \nDealer has: ${dealerHand} \nIt's a tie!`)
  } 
}

// prompt to play again
function promptPlayAgain() {
  play = prompt(`Do you want to play again? Type yes to play again.`).toLowerCase();
  if (play == "yes") {
    startGame()
  } else {
    (`Thanks for playing. See you next time!`)
  }
}

// Blackjack message
function blackJack () {
  alert(`You have: ${playerHand}. Blackjack!! you WIN!!`);
}

// game over message
function gameOver() {
  alert(`You have: ${playerHand} \nDealer has: ${dealerHand} \nSorry, you lose. Better luck next time.`)
  promptPlayAgain();
}


// askUserToStartGame();
