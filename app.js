const roll1 = document.getElementById("player1Roll"); 
const roll2 = document.getElementById("player2Roll"); 
const score1 = document.getElementById("player1Score");
const score2 = document.getElementById("player2Score");
const dice1 = document.getElementById("player1Dice");
const dice2 = document.getElementById("player2Dice");
const whosTurn = document.getElementById("whosTurn")

let player1Total = 0;
let player2Total = 0;
let currentTurn = 1;

player1Roll.addEventListener("click", () => {
	if (currentTurn == 1) {
		let currentRoll = Math.ceil(Math.random() * 6);
		whosTurn.textContent = "Player 1 is rolling";
		player1Dice.src = `./images/d${currentRoll}.png`;
		player1Total += currentRoll;
		player1Score.textContent = player1Total;
		if (player1Total >= 40) {
			winPlayer1();
		} else {
			if (currentRoll == 1) {
				winPlayer2();
			}
		}
	}
});

player2Roll.addEventListener("click", () => {
	if (currentTurn == 2) {
		let currentRoll = Math.ceil(Math.random() * 6);
		whosTurn.textContent = "Player 2 is rolling";
		player2Dice.src = `./images/d${currentRoll}.png`;
		player2Total += currentRoll;
		player2Score.textContent = player2Total;
		if (player2Total >= 40) {
			winPlayer2();
		} else {
			if (currentRoll == 1) {
				winPlayer1();
			}
		}
	}
});

if ((currentTurn = 1)) {
	whosTurn.textContent = "Player 1 is rolling!";
} else if ((currentTurn = 2)) {
	whosTurn.textContent = "Player 2 is rolling!";
}

passPlayer1.addEventListener("click", () => {
	if (currentTurn == 1) {
		currentTurn = 2;
        whosTurn.textContent = "Player 2 will now roll";
	}
});
passPlayer2.addEventListener("click", () => {
	if (currentTurn == 2) {
		currentTurn = 1;
        whosTurn.textContent = "Player 1 will now roll";
	}
});

const winPlayer1 = () => {
	whosTurn.textContent = `${player1Total} - Player 1 Has Won!`;
	player1Total = 0;
};
const winPlayer2 = () => {
	whosTurn.textContent = `${player2Total} - Player 2 Has Won!`;
	player2Total = 0;
};

reset.addEventListener("click", () => {
    window.location.reload();})