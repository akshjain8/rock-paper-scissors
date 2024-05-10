//Rock paper scissors

let arr = ["Rock", "Paper", "Scissors"];
let Playcounter = 0;
let UserScore = 0;
let computerPlayerScore = 0;
// const Playbutton = playRound(HumanInput, computerChoice);

function ifRunningOnNodeJs() {
    // document.getElementById("rock").addEventListener("click", function() {
    //     playRound("Rock");
    // });

    // document.getElementById("paper").addEventListener("click", function() {
    //     playRound("Paper");
    // });

    // document.getElementById("scissors").addEventListener("click", function() {
    //     playRound("Scissors");
    // });
}

function HumanInput() {
    const input = prompt("Whats yours Choice ? ");
    return input;
}
function computerChoice() {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const computerPlayerpick = arr[randomIndex];
    return computerPlayerpick;
}

function displayScores(UserScore, computerPlayerScore) {
    if (UserScore > computerPlayerScore) {
        console.log(`Player WON! \n Player Score : ${UserScore} `);
    }
    else {
        console.log(`Computer WON! \n Computer Score : ${computerPlayerScore} `);
    }
}
function play5Times() {
    let i = 0;
    for (i = 0; i < 5 ; i++) {
        function playRound(HumanInput, computerChoice) {
            let i = 0;
            for (i = 0; i < 5; i++) {
                if (HumanInput == "Rock" & computerChoice == "Paper" || HumanInput == "Paper" & computerChoice == "Scissors" || HumanInput == "Scissors" & computerChoice == "Rock") {
                    computerChoice++;
                    console.log("you lost ! Go again ");
                }
                else if (HumanInput == "Rock" & computerChoice == "Scissors" || HumanInput == "Scissors" & computerChoice == "Paper" || HumanInput == "Paper" & computerChoice == "Rock") {
                    UserScore++;
                    console.log("You won !");
                }
                else {
                    console.log("It's a Draw !")
                }
                displayScores(UserScore, computerPlayerScore);
            }
        }
    }
}

// You can think of it as a snowball. You, yourself, are a snowball. You’re rolling down a hill full of snow; the further you roll, the more snow will stick to you. Sure, snow will also fall off you, and you’ll forget things often, but that’s just part of the process. 