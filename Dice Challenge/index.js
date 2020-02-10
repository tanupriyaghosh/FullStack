var randomNumber1=Math.floor(Math.random() * 6)+1;
var randomDiceImage1= "Images/dice" + randomNumber1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var randomNumber2=Math.floor(Math.random() * 6)+1;
var randomDiceImage2= "Images/dice" + randomNumber2 +".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2 )
{
var result = "Player 1 wins";
}
else if (randomNumber1< randomNumber2)
 {
 var result= "Player 2 wins";
}
  else
  {
    var result = "Tie, try again";
}
document.querySelector("h1").innerHTML=result;
