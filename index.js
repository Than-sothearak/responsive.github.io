const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === "paper") {
      return userInput;
    } else {
      return ('Error');
    }
   };
   
   const getComputerChoice = () => {
     const randomNum = Math.floor(Math.random() * 3);
     
     switch (randomNum){
       case 0:
       return 'rock';
   
       case 1:
       return 'paper';
   
       case 2:
       return 'scissors';
       
     };
   }
   
   const determineWinner = (userChoice, computerChoice) => {
       
       if ( userChoice === computerChoice) {
         return 'This game is tie!';
       } 

       if( userChoice === 'rock' && computerChoice === 'paper') {
         return 'The compter win!';
       } else {
         return 'You won!';
       }
   };

   
   const playGame = () => {

     const userChoice = getUserChoice('Rock');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw:' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));

   };
   
   playGame();
   