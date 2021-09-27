function diceGame() {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1); // Random Number 1-6 for leftDice// 
    let randomNumber2 = Math.floor(Math.random() * 6 + 1); // Random Number 1-6 for rightDice // 
    let randomImageTwo = "images/dice" + randomNumber2 + ".png"; //left dice will take from img folder random img 1-6
    let randomImageOne = "images/dice" + randomNumber1 + ".png"; //right dice will take from img folder random img 1-6
    let leftDice = document.querySelector(".img1").setAttribute("src", randomImageOne);
    let rightDice = document.querySelector(".img2").setAttribute("src", randomImageTwo);
    // get the images elements and set them atribute of src and the variable that is the random images//

    let header = document.querySelector("h1");
    // get the h1 element and store him inside header variable //


    // set conditions: player 1 if he wins,  else if  player 2 wins, else its draw! 
    if (randomNumber1 > randomNumber2) {
        header.innerHTML = "Player 1 Won!";
        header.style.color = "green";
    } else if (randomNumber2 > randomNumber1) {
        header.innerHTML = "Player 2 Won!";
        header.style.color = "red";
    } else {
        header.innerHTML = "Draw!";
        header.style.color = "#4ECCA3";
    }
}