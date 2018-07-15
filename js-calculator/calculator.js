document.addEventListener('DOMContentLoaded', createEventListeners)

let display = document.getElementsByClassName("display")

function createEventListeners(){
  let buttons = document.getElementsByClassName("button")
  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", onClickCalculate)
  }
}

let entries = [];
let temp = ''
function onClickCalculate(){
  
  console.log("Start temp " + temp)
  console.log("Start entries " + entries)
  let value = this.innerHTML;
  display[0].innerHTML = value;
  
  if(value === "AC"){
    entries=[];
    temp = '';
  } else if(value === "CE") {
    temp = ''
  } else if (value === "="){
    calculateAnswer()
  } else {
    if (!isNaN(value) || value === '.') {
      temp += value
    } else {
      entries.push(temp);
      entries.push(value);
      temp = '';
    }
  }

  console.log(temp)
  
}

function calculateAnswer(){
  entries.push(temp);
  display[0].innerHTML = "hello"
  console.log(display)
  console.log(entries)
  
}