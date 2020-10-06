let randomNumber1 = Math.floor(Math.random()*6+1);
console.log(randomNumber1)
newSrc = "./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",newSrc);

let randomNumber2 = Math.floor(Math.random()*6+1);
console.log(randomNumber2)
newSrc = "./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",newSrc);

if(randomNumber1 > randomNumber2){
  console.log('p-1 wins')
  document.querySelector("h1").textContent="🚩 Player 1 wins!";
} else if(randomNumber2 > randomNumber1){
  console.log('p-2 wins')
  document.querySelector("h1").textContent="Player 2 wins! 🚩 ";

}else{
  document.querySelector("h1").textContent="Draw!";

  console.log("it's a draw");
}