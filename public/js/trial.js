const game = () => {
  const play = () => {
    const rockPlayerBtn = document.querySelector(".rock-p");
    const paperPlayerBtn = document.querySelector(".paper-p");
    const scissorPlayerBtn = document.querySelector(".scissor-p");
    const rockComputerBtn = document.querySelector(".rock-c");
    const paperComputerBtn = document.querySelector(".paper-c");
    const scissorComputerBtn = document.querySelector(".scissor-c");
    const playerChoices = [rockPlayerBtn, paperPlayerBtn, scissorPlayerBtn];
    const computerChoices = [
      rockComputerBtn,
      paperComputerBtn,
      scissorComputerBtn,
    ];

    playerChoices.forEach((option) => {
      option.addEventListener("click", () => {
        let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
        let computerBtnGroup = document.querySelector(".computer-button-group");
        if (computerChoice.id === "rock") {
          computerBtnGroup.innerHTML = `<div class="rock-button-group">
          <button class="btn rock-c border-0" id="rock" style="opacity: 100%;" disabled>
            <img src="assets/batu.png" alt="" width="100" />
          </button>
        </div>
        <div class="paper-button-group">
          <button class="btn paper-c border-0" id="paper" disabled>
            <img src="assets/kertas.png" alt="" width="100" />
          </button>
        </div>
        <div class="scissor-button-group">
          <button class="btn scissor-c border-0" id="scissor" disabled>
            <img src="assets/gunting.png" alt="" width="100" />
          </button>
        </div>`;
        } else if (computerChoice.id === "paper") {
          console.log("paper clicked");
          computerBtnGroup.innerHTML = `<div class="rock-button-group">
          <button class="btn rock-c border-0" id="rock" disabled>
            <img src="assets/batu.png" alt="" width="100" />
          </button>
        </div>
        <div class="paper-button-group">
          <button class="btn paper-c border-0" id="paper" style="opacity: 100%;" disabled>
            <img src="assets/kertas.png" alt="" width="100" />
          </button>
        </div>
        <div class="scissor-button-group">
          <button class="btn scissor-c border-0" id="scissor" disabled>
            <img src="assets/gunting.png" alt="" width="100" />
          </button>
        </div>`;
        } else {
          console.log("scissor clicked");
          computerBtnGroup.innerHTML = `<div class="rock-button-group">
          <button class="btn rock-c border-0" id="rock" disabled>
            <img src="assets/batu.png" alt="" width="100" />
          </button>
        </div>
        <div class="paper-button-group">
          <button class="btn paper-c border-0" id="paper" disabled>
            <img src="assets/kertas.png" alt="" width="100" />
          </button>
        </div>
        <div class="scissor-button-group">
          <button class="btn scissor-c border-0" id="scissor" style="opacity: 100%;" disabled>
            <img src="assets/gunting.png" alt="" width="100" />
          </button>
        </div>`;
        }
        console.log(option);
        console.log(computerChoice);
        winner(option.id, computerChoice.id);
      });
    });
  };

  const winner = (player, computer) => {
    let result = document.querySelector(".container-result");
    let computerChoose = document.querySelector(".choose-com");
    let playerChoose = document.querySelector(".choose-player");
    if (player === computer) {
      result.innerHTML = `<div
      class="d-flex container-result-draw justify-content-center align-items-center"
    >
      <h4 class="result text-center">Draw!</h4>
    </div>`;
      computerChoose.innerHTML = `Computer: ${computer}`;
      playerChoose.innerHTML = `Player: ${player}`;
      console.log("draw");
    } else if (
      (player === "rock" && computer === "scissor") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissor" && computer === "paper")
    ) {
      result.innerHTML = `<div
      class="d-flex container-result-win justify-content-center align-items-center"
    >
      <h4 class="result text-center">You Win!</h4>
    </div>`;
      computerChoose.innerHTML = `Computer: ${computer}`;
      playerChoose.innerHTML = `Player: ${player}`;
      console.log("win");
    } else {
      result.innerHTML = `<div
      class="d-flex container-result-lose justify-content-center align-items-center"
    >
      <h4 class="result text-center">You Lose!</h4>
    </div>`;
      computerChoose.innerHTML = `Computer: ${computer}`;
      playerChoose.innerHTML = `Player: ${player}`;
      console.log("lose");
    }
  };

  const reloadBtn = document.querySelector(".refresh");
  reloadBtn.addEventListener("click", () => {
    window.location.reload();
  });

  play();
};

game();
