var userHealth = 40;
var grantHealth = 10;
var wins = 0; 
var player = 0;
function startGame() {
	playing = prompt ("Do you want to play?");
	answer = playing.toUpperCase() 
	if (answer == "NO") {
	  answer = prompt ("Come on, you know you wanna! Say yes!");
	  answer = answer.toUpperCase();
 	}
	if (answer == "NO"){
		console.log ("Okay, maybe next time.");
	} 
	else if ( answer == "YES") {
		startCombat();
	}
}
function getDamage() {
	attack = prompt("Do you want to attack or quit?");
	if (attack === "quit") {
		console.log ("See you next time.");
		return endGame();	
	} 
}
function startCombat() {
	if (userHealth = 40) {
	var player = prompt("Pick a name for your character:");
	}
	while (wins < 4){
		 if (wins === 3) {
	      console.log( "Winner: " + player + "!" + " You beat Almighty Grant, Congrats!");
	      break; 
	    }
	getDamage();
	userHealth -= Math.floor((Math.random() * 5) + 1);
	grantHealth -= Math.floor((Math.random() * 5) + 1);
	console.log ("Ouch! You've been hit. " + player + "'s health is " + userHealth + "!");
	console.log ("You hit Almighty Grant! Almighty Grant's health is " + grantHealth + "!");
	   	 if (grantHealth <= 0) {
			wins++;
	        grantHealth = 10;
			console.log ( "You Win! On to the next level." );
		}
		if (userHealth <= 0) {
			console.log("Game Over");
			break;
		}
	}
function endGame() {
	console.log("Game Over");
}




}


