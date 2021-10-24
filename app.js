let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_p= document.querySelector(".result>p");
const rock_div= document.getElementById("rock");
const paper_div= document.getElementById("paper");
const scissors_div= document.getElementById("scissor");



function getComputerChoice(){
    const choices= ['rock', 'paper', 'scissor'];
    const randomNumber= Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
 function win(userChoice,computerChoice){
     userScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML=computerScore;
     const smallUserword= "user".fontsize(3).sub();
     const smallComputerword= "comp".fontsize(3).sub();
     result_p.innerHTML= userChoice+smallUserword+ " beats " + computerChoice+smallComputerword+ " You win! ";
     document.getElementById(userChoice).classList.add('green-glow');
     setTimeout( function(){document.getElementById(userChoice).classList.remove('green-glow')},300)
 }
 function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserword= "user".fontsize(3).sub();
    const smallComputerword= "comp".fontsize(3).sub();
    result_p.innerHTML= userChoice+smallUserword+ " loses to  " + computerChoice+smallComputerword+ " You lost... ";
    document.getElementById(userChoice).classList.add('red-glow');
     setTimeout( function(){document.getElementById(userChoice).classList.remove('red-glow')},300)
 }
  function draw(userChoice,computerChoice){
    const smallUserword= "user".fontsize(3).sub();
    const smallComputerword= "comp".fontsize(3).sub();
    result_p.innerHTML= userChoice+smallUserword+ "equals " + computerChoice+smallComputerword+ " It's a draw ";
    document.getElementById(userChoice).classList.add('gray-glow');
     setTimeout( function(){document.getElementById(userChoice).classList.remove('gray-glow')},300)
  }


function Game(userChoice){
  const computerChoice= getComputerChoice();
  switch (userChoice+computerChoice){
      case "paperrock":
      case "rockscissor":
      case "scissorpaper":
          win(userChoice,computerChoice);
          break;
      case "rockpaper":
      case "paperscissor":
      case "scissorrock":
          lose(userChoice,computerChoice);
          break;
      case "rockrock":
      case "paperpaper":
      case "scissorscisork":
          draw(userChoice,computerChoice);
          break;
  }
}

function main(){
   rock_div.addEventListener('click', function() {
      Game("rock");
   })

  paper_div.addEventListener('click',function(){
     Game("paper");
  })
  scissors_div.addEventListener('click',function(){
    Game("scissor");
  })
}


main ();

