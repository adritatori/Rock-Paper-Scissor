let hands = ["rock", "paper", "scissor"]

let person2 =  document.getElementById('persone2')
let result = document.getElementById('resultd')
let error = document.getElementById('error')
let fperson = ""
 function submit (){
      var num = document.getElementById('#myText').value;
console.log(num)
      if(num === 'a'){
      	fperson='rock'
      	error.innerText = " "
      }else if(num=== 'b'){
      	 fperson = 'paper'
      	 error.innerText = " "
      }else if(num=== 'c'){
      	fperson = 'scissor'
      	error.innerText = " "
      }else{
      		error.innerText = "Enter value : a b or c"
      }

      console.log(fperson)
}


let secondPerson ={
  randomValue: function(){
    return hands[Math.floor(Math.random()*3)]
  }
}
let sperson = secondPerson.randomValue()





// Create a function that returns a random item from the array

function randomvalueGenerator(){

  if(fperson==="rock"&& sperson ==="paper"){
  	person2.innerText = "Paper"
  	result.innerText = 'Winner!'
    console.log("Winner")
}else if(fperson==="rock"&& sperson ==="scissor"){
	person2.innerText = "Scissor"
	result.innerText = 'Looser!'
  console.log("Looser")
}else if(fperson==="rock"&& sperson ==="rock"){
	person2.innerText = "rock"
		result.innerText = "Draw !! Okay,Let's Play again?"
console.log("Okay,Let's Play again?")
}else if(fperson==="scissor"&& sperson ==="scissor"){
	person2.innerText = "Scissor"
	result.innerText = " Draw!! Okay,Let's Play again?"
console.log("Okay,Let's Play again?")
}else if(fperson==="scissor"&& sperson ==="rock"){
	person2.innerText = "rock"
	result.innerText = 'Looser!'
console.log("Looser")
}else if(fperson==="scissor"&& sperson ==="paper"){
	person2.innerText = "Paper"
	result.innerText = 'Winner!'
console.log("Winner")
}else if(fperson==="paper"&& sperson ==="rock"){
	person2.innerText = "rock"
	result.innerText = 'Winner!'
console.log("Winner")
}else if(fperson==="paper"&& sperson ==="scissor"){
	person2.innerText = "Scissor"
	result.innerText = 'Looser!'
console.log("Looser")
}else{
	person2.innerText = "paper"
result.innerText = " Draw!! Okay,Let's Play again?"
  console.log("Okay,Let's Play again?")
}

}

