var userHealth = 40;
var grantHealth = 10;
var wins = 0; 
var playing = prompt ("Do you want to play?");
var answer = playing.toUpperCase()
if (answer == "NO") {
  answer = prompt ("Come on, you know you wanna! Say yes!");
  answer = answer.toUpperCase();
} 
if (answer == "NO"){
	console.log ("Okay, maybe next time.");
}
else if ( answer == "YES") {
var player = prompt("Pick a name for your character:");
while (answer == "YES"){
	 if (wins === 3) {
      console.log( "Winner: " + player + "!" + " You beat Almighty Grant, Congrats!");
      break; 
    }
userHealth -= Math.floor((Math.random() * 2) + 1);
grantHealth -= Math.floor((Math.random() * 2) + 1);
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
}
