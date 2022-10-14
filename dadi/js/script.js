// **Gioco dei dadi**
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const btnToss = document.querySelector("button");
const userTossResult = document.getElementById("user-toss-result");
const computerTossResult = document.getElementById("computer-toss-result");
const winner = document.getElementById("winner");
const winnerCol = document.querySelector(".row :nth-child(4)");

const min = 1;
const max = 6;
let tossUser, tossComputer = 0;

// create two random value in tossUser & tossComputer, compare them and declare the winner
btnToss.addEventListener("click" , function(){
    // using math random for the random toss
    tossUser = Math.floor(Math.random() * (max - min + 1) + min);
    tossComputer = Math.floor(Math.random() * (max - min + 1) + min);
   
    //sending the toss result in the HTML 
    userTossResult.innerHTML = tossUser;
    computerTossResult.innerHTML = tossComputer;

    // comparing the toss results and declaring the winner
    if(tossUser > tossComputer){
        winner.innerHTML = "Hai Vinto :)";
    }else if( tossUser === tossComputer){
        winner.innerHTML = "Pareggio :|";
    }else winner.innerHTML = "Hai perso :(";
    
    //showing the result in the HTML
    winnerCol.classList.remove("d-none");
})
