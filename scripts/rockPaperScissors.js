function rockPaperScissors(input){
  //define variables
  const select = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random()*3);
  const compSelect = select[random];
  const userSelect = input;
  let result = "";

  let userSelectText = document.getElementById('userSelect');
  let compSelectText = document.getElementById('compSelect');
  let resultText = document.getElementById('result');
  let resultDiv = document.getElementById('resultDiv');
  let reset = document.getElementById('reset');


  //checks inputs and sets result value
  if (userSelect == 'rock'){
    switch(compSelect){
      case 'rock':
      result = 'draw';
      break;
      case 'paper':
      result = 'lose';
      break;
      case 'scissors':
      result = 'win';
      break;
      default:
      result = 'win';
    }
  }else if(userSelect == 'paper'){
    switch(compSelect){
      case 'rock':
        result = 'win';
        break;
      case 'paper':
        result = 'draw';
        break;
      case 'scissors':
        result = 'lose';
        break;
      default:
        result = 'win';
    }
  }else if(userSelect == 'scissors'){
    switch (compSelect) {
      case 'rock':
        result = 'lose';
        break;
      case 'paper':
        result = 'win';
        break;
      case 'scissors':
        result = 'draw';
        break;
      default:
        result = 'win';
    }
  }else{
    alert("Uh Oh! Something went wrong :/ Please try again!");
  }
  console.log(result);
  console.log(userSelect);
  console.log(compSelect);

  //changes html elements depending on inputs and result
  resultDiv.style.display = 'block';

  userSelectText.innerHTML = userSelect;
  compSelectText.innerHTML = compSelect;
  reset.style.display = 'block';

  if(result == 'win'){
    resultText.innerHTML = "You Win!";
  }else if (result == 'lose'){
    resultText.innerHTML = "You Lose :(";
  }else if (result = 'draw'){
    resultText.innerHTML = "It's a draw! Try Again";
  }

}

function reset(){
  let userSelectText = document.getElementById('userSelect');
  let compSelectText = document.getElementById('compSelect');
  let resultText = document.getElementById('result');
  let resultDiv = document.getElementById('resultDiv');
  let reset = document.getElementById('reset');

  reset.style.display = 'none';
  resultDiv.style.display = 'none';
  resultText.innerHTML = "";
  userSelectText.innerHTML = "";
  compSelectText.innerHTML = "";
}
