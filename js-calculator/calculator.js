document.addEventListener('DOMContentLoaded', createEventListeners)

let display = document.getElementById("display")

function createEventListeners(){
  let buttons = document.getElementsByClassName("button")
  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", onClickCalculate)
  }
}

let entries = [];
let temp = ''
function onClickCalculate(){
  let value = this.innerHTML;


  if(value === "AC"){
    display.innerHTML = " ";
    entries=[];
    temp = '';
  } else if(value === "CE") {
    display.innerHTML = "";
    temp = ''
  } else if (value === "="){
    calculateAnswer()
  } else {
    if (!isNaN(value) || value === '.') {
      display.innerHTML = display.innerHTML + value;
      temp += value
    } else {
      display.innerHTML = ""
      entries.push(temp);
      entries.push(value);
      temp = '';
    }
  }

}

function calculateAnswer(){
  entries.push(temp);
  var total = Number(entries[0]);
  for (var i = 1; i < entries.length; i++) {
    var nextNum = Number(entries[i+1])
    var symbol = entries[i];
    
    if (symbol === '+') { 
      total += nextNum; 
    } else if (symbol === '-') { 
      total -= nextNum; 
    } else if (symbol === '*') { 
      total *= nextNum; 
    } else if (symbol === '/') {
       total /= nextNum; 
    }


    i++;
  } 

  
  display.innerHTML = total
  temp = ""
  entries = []
  total = 0
}