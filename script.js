console.log("Ding");




// 2. Deals a random number between 2 and 11 inclusive to the dealer.

// 3. If the player hits, add a number between 2 and 11.

  // ask user hit or stay
    

  // If the player goes over 21 --> they lose.
    // if hit = check if new sum is > 21 
    

  // If the player has 21, stay for them.
    // if = equal -> blackjack

  // Repeat until they choose to stay or they bust
    // if sum < 21 ask user hit or stay

// 4. Once player stays add a number between 2 and 11 to the dealer's hand.
  // - If dealer number is less than 17 add another number
    
  // - Repeat until the number is over over 17 but less 
    // if dealer sum < 17 then repeat until sum > 17

  //   than 21, or if the dealer goes over 21
    // if > 21 - dealer lose

  // - If dealer goes over 21 they lose.

// 5. Once dealer stops, and neither player bust, 
// compare each number to 21. Whoever is closer wins!

// *** Create functions if you begin to repeat yourself.

// function to generate random number 

let playerHand = 0;
let dealerHand = 0;

let hit = true;

// ASK USER TO START GAME
function askUserToStartGame() {
  let play = confirm(`Start a game of Blackjack? OK to start game.`);

  if (play) {
    startGame();
    } else {
    alert(`Maybe next time!`)
    }
}

// START GAME
function startGame() {

  playerHand = Math.floor(Math.random() *17) + 4;
  alert(`You have: ${playerHand}`)
  if (playerHand ==21) {
    alert("Blackjack!! You Won!!")
  } else {
    dealerHand = Math.floor(Math.random() * 11) + 2;
    alert(`Dealer has: ${dealerHand}`)
    }

  confirm(`You have: ${playerHand} \nDealer has: ${dealerHand} \nHit or stay? (OK to hit)`)
  }


function generateCard() {
  var newCard = Math.floor(Math.random()) +2;
  return(newCard)
}


// function hitOrStay() {
//   confirm("Hit or stay? OK to hit, cancel to Stay.")
//   if (true) {
//     generateCard();
//   } 
// }


// if (randomNumber == 21) {
//   return("Blackjack!!")
// }


askUserToStartGame();
// startGame()