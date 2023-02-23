let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

console.log(generateTarget(7));

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);

    return humanDifference <= computerDifference;
};

// const getAbsoluteDistance = () => {
//     const humanDifference = Math.abs(targetGuess - humanGuess);
//     const computerDifference = Math.abs(targetGuess - computerGuess);
// }

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++
    } else if (winner === 'computer') {
        return computerScore++
    }
};

const advanceRound = () => {
    currentRoundNumber++
};