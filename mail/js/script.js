// **Mail**
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const email = document.getElementById("email");
const button = document.querySelector("button");
const message = document.getElementById("message");
let isFound = false;
let emailArr =["gigi@pippo.it", "a@a.it", "pino@asd.it" ];



button.addEventListener("click" , function(){

    let emailValue = email.value; //take the value of email imput
    
    //compare emailValue with every string in emailArr. flag isFound true if true 
    for(let i = 0 ; i < emailArr.length ; i++){
        
        if(emailValue.toLowerCase() === emailArr[i] ){
            isFound = true;
        }
    }

    //add found or not found in html and reset isFound if flag == true
    if(isFound){
        message.innerHTML = "Email trovata"
        isFound = false;
    }else{
        message.innerHTML = "Email non trovata";
    }
});



