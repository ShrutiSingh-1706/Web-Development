let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#Computer-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
/* Math.floor(Math.random() * 10) by using this we can generate any random no. between 0 to 9(Normally range of random() is between
 0 to 1 but we can multiply with any number to random() to get desired range but this range will be one less than the number is
 multiplied. And Math.floor() is used to generate a whole number because random() generates decimal numbers.)
*/
     const randIdx =  Math.floor(Math.random() * 3);
     return options[randIdx];
};

const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play again!!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Win!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = `You Lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        // Draw game
        drawGame();
               
    }else{
        let  userWin = true;
        if(userChoice === "Rock") {
            // scissors , paper
            userWin = compChoice === "Paper"? false : true;
        }else if(userChoice ==="Paper") {
            // rock , scissors
            userWin = compChoice === "Scissors"? false : true;
        }else{
            // rock , paper
            userWin = compChoice === "Rock"? false : true;
        }
         showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice)
    });
});