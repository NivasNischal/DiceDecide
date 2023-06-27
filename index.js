var randomNumber1 = Math.floor(Math.random() * 6) +1; //1-6

var randomImageSource = "images/dice" + randomNumber1 + ".svg";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1; 

var randomImageSource2 = "images/dice" + randomNumber2 + ".svg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if player 1 win
if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Winss!!"
}

// if player 2 win 
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Winss!!"
}

else 
{
    document.querySelector("h1").innerHTML = "Draw !!!"
}
