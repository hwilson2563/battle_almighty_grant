var user = {
	name: "", 
	health: 40,
	healsRemaining: 2,
	wins: 0,
	generateAttackDamage: function () {
		return Math.floor((Math.random() * 3) + 1);
	},
	heal: function() {
		--this.healsRemaining;
		return Math.floor((Math.random() * 10) + 1);
	}

}
var enemy = {
	health: 10,
	name: "The Amazing Grant",
	generateAttackDamage: function () {
		return Math.floor((Math.random() * 3) + 1);
	}
}

function startGame() {
	playing = prompt ("Do you want to play?");
	answer = playing.toUpperCase(); 
	while (answer == "NO") {
	  answer = prompt ("Come on, you know you wanna! Say yes!");
	  answer = answer.toUpperCase();
	}
	if ( answer == "YES") {
		user.name = prompt("Pick a name for your character:");
		startCombat();
	}
}

function startCombat() {
	while (user.wins < 6){
		 if (user.wins === 5) {
	      console.log( "Winner: " + user.name + "!" + " You beat Almighty Grant, Congrats!");
	      break; 
	    }
	    var choice = prompt ("Do you want to attack, heal or quit?");
	    	if (choice === "attack") {
	    	user.health -= user.generateAttackDamage();
			enemy.health -= enemy.generateAttackDamage();
			console.log ("Ouch! You've been hit. " + user.name + "'s health is " + user.health + "!");
			console.log ("You hit Almighty Grant! Almighty Grant's health is " + enemy.health + "!");	
	    	}
	     	if (choice === "heal") {
	     		if (user.healsRemaining !== 0) {
	     			user.health += user.heal();
	     			console.log("You've been healed " + "Your health is now " + user.health + "." + "You have " + user.healsRemaining + " heal remaining.");
	     			user.health -= user.generateAttackDamage();
	     			console.log ("Ouch! You've been hit. " + user.name + "'s health is " + user.health + "!");
	     		} else if (user.healsRemaining === 0) {
	     			console.log ("You have no more heals left.");
	     			return startCombat();
	     		}
	    	}
	    	else if (choice === "quit") {
	    		console.log ("Gone so soon...fine. See you later!");
	    		break;
	    	}
	   	if (enemy.health <= 0) {
			user.wins++;
	        enemy.health = 10;
			console.log ( "You Win! On to the next level." );
		}
		if (user.health <= 0) {
			console.log("Game Over");
			break;
		}
	}
}

