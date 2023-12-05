function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "Rock";
    } else if (randomNumber === 1) {
      return "Paper";
    } else if (randomNumber === 2) {
      return "Scissors";
    }
// This will only happen if something goes wrong with the random number generation
    return "Error: Invalid random number";
  }

// Example usage:
  const computerChoice = getComputerChoice();
  console.log("Computer chose: " + computerChoice);