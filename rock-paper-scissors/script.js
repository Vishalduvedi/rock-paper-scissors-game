let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userboard = document.querySelector("#user-score")
const comboard = document.querySelector("#com-score")
// Generate a random number between min and max (inclusive)

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex]
}
const drawGame = () => {
    // console.log("game was draw")
    msg.innerText = "Game Was Draw Try Again !"
    msg.style.background="darkblue"

}

const showWinner = (userWin,userChoice, computerChoice) => {
    if (userWin) {
        userScore++
        // console.log("You Win !")
        userboard.innerText = userScore;
        msg.innerText = `You Win ! ${userChoice} beats ${computerChoice}`
        msg.style.background="green"

    } else {
        comScore++
        // console.log("You Lose")
        comboard.innerText = comScore;
        msg.innerText = `You lose ! ${computerChoice} beats ${userChoice}`
        msg.style.background="red"


    }
}

const playGame = (userChoice) => {
    // console.log("userChoice = ", userChoice)
    const computerChoice = genComputerChoice();
    // console.log("comp choice = ", computerChoice)

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor,paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
            userWin = computerChoice === "scissors" ? false : true
        } else {
            //rock,paper
            userWin = computerChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, computerChoice)
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Corrected attribute name
        playGame(userChoice);

    });
});
