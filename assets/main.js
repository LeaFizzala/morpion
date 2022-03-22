// creating a variable turn and equal it to player1 so she always starts the game
var turn = "player1"; 
var player1 = 1;
var player2 = 2;
var numJoueur;
var isWon=false;
// accessing the elements with same tagname
const elements = document.querySelectorAll('td');

gameTurns();

function gameTurns(){// handles the turn-based game   
            
         // adding the event listener by looping 
         elements.forEach(element => { element.addEventListener('click', handleClick);
         
        });                 
}

function handleClick(elt){ // Fonction qui gère le clic et empêche le double clic

    if(turn==="player1"){
        elt.target.style.backgroundColor = "green";
        tableCells[elt.target.id]= player1;
        numJoueur = player1;
        victory(numJoueur);
        if(isWon){
            console.log("PLAYER ONE VICTORY !");
        }

        console.log(tableCells);
        elt.target.classList.add('clicked');
        
            if(elt.target.classList.contains('clicked')){
                elt.target.removeEventListener;
                console.log("listener removed");
                
            }
        turn="player2";
        return;   
            
    }
    if(turn==="player2"){
        elt.target.style.backgroundColor = "red";
        tableCells[elt.target.id]= player2;
        numJoueur = player2;
        victory(numJoueur);
        if(isWon){
            console.log("PLAYER TWO VICTORY !");
        }
        console.log(tableCells);
        elt.target.classList.add('clicked');
        
            if(elt.target.classList.contains('clicked')){
                elt.target.removeEventListener;
                console.log("listener removed");
               
            }
       turn="player1";
       return;     
    }
}
let tableCells = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function victory(numJoueur){

        if(tableCells[0]==numJoueur && tableCells[1]==numJoueur && tableCells[2]==numJoueur){
            isWon=true;
            return isWon;
        }
        if(tableCells[3]==numJoueur && tableCells[4]==numJoueur && tableCells[5]==numJoueur){
            isWon=true;
            return isWon;
        }
        if(tableCells[6]==numJoueur && tableCells[7]==numJoueur && tableCells[8]==numJoueur){
            isWon=true;
            return isWon;        
        }
        if(tableCells[0]==numJoueur && tableCells[3]==numJoueur && tableCells[6]==numJoueur){
            isWon=true;
            return isWon;
        }
        if(tableCells[1]==numJoueur && tableCells[4]==numJoueur && tableCells[7]==numJoueur){
            isWon=true;
            return isWon;
        }
        if(tableCells[2]==numJoueur && tableCells[5]==numJoueur && tableCells[8]==numJoueur){
            isWon=true;
            return isWon;
        }
        if(tableCells[0]==numJoueur && tableCells[4]==numJoueur && tableCells[8]==numJoueur){
            isWon=true;
            return isWon;
        }
        if(tableCells[2]==numJoueur && tableCells[4]==numJoueur && tableCells[6]==numJoueur){
            isWon=true;
            return isWon;
        }
        else{
            isWon=false;
        }

}
function checkGameStatus(){
    if(isWon){
        
    }
}
