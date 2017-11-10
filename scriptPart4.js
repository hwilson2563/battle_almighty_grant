var character = null;
  var enemy = {
        name: "Grant",
        health: 10,
        generateAttackDamage: function() {
          return Math.floor(Math.random() * 3) + 1;
        }
      }

      function startGame() {
        character = {
          name: prompt("Pick a name for your character:"),
          health: 40,
          wins: 0,
          healsRemaining: 2,
          generateAttackDamage: function() {
            return Math.floor(Math.random() * 3) + 1;
          },
          heal: function() {
            --this.healsRemaining;
            return Math.floor(Math.random() * 10) + 1;
          }
        };
      document.getElementsByClassName("begin")[0].style.display = "none";
      document.getElementsByClassName("beginButton")[0].style.display = "none";
      displayInfo();
      }


function startCombat(choice) {
  var gameText = "";
    
    if (choice === "attack") {
      if (character.wins >= 5) {
      gameText = "You have won the game!";
      statsInfo(gameText);
      displayInfo();
      return;
      }
      if (character.health <= 0) {
      gameText = "You have been defeated!";
      statsInfo (gameText);
      displayInfo();
      return;
    }
    if (enemy.health <= 0) {
      character.wins++;
      gameText= "You have beat " + enemy.name + "! You need to win " + (5 - character.wins) + " more round(s).";
      enemy.health = 10;
     statsInfo (gameText);
      displayInfo();
    }
      enemy.health -= character.generateAttackDamage();
      character.health -= enemy.generateAttackDamage();
      gameText = character.name + " has " + character.health + " health left. " +
      enemy.name + " has " + enemy.health + " health left.";
    } else if (choice === "quit") {
     document.getElementsByClassName("healsRInfo")[0].style.display = "none";
     document.getElementsByClassName("healthInfo")[0].style.display = "none";
     document.getElementsByClassName("name")[0].style.display = "none";
     document.getElementsByClassName("winsInfo")[0].style.display = "none";
     document.getElementsByClassName("eName")[0].style.display = "none";
     document.getElementsByClassName("eHealthInfo")[0].style.display = "none";
     document.getElementsByTagName("button")[0].style.display="none";
     document.getElementsByTagName("button")[1].style.display="none";
     document.getElementsByTagName("button")[2].style.display="none";
     document.getElementsByTagName("button")[3].style.display="none";
     gameText = character.name + " has quit the game!"
     statsInfo(gameText);
      return;
    } else if (choice === "heal") {
      if (character.healsRemaining > 0) {
        if (character.health <= 0) {
      gameText = "You have been defeated!";
      statsInfo (gameText);
      displayInfo();
      return;
      }
        character.health += character.heal();
        var text = character.name + " has healed and has " + character.health + " health. ";
        character.health -= enemy.generateAttackDamage();
        gameText =  text + character.name + " gets hit after healing and has " + character.health + " left!";
        statsInfo (gameText);
        displayInfo(); 
      } else if (character.healsRemaining <= 0) {
        if (character.health <= 0) {
        gameText = "You have been defeated!";
        statsInfo (gameText);
        displayInfo();
        return;
        };
        gameText = "You cannot heal!";
        character.health -= enemy.generateAttackDamage();
      gameText = character.name + " has " + character.health + " health left. "
                + enemy.name + " has " + enemy.health + " health left.";
    statsInfo (gameText);
    displayInfo();
  
      }
    }
    statsInfo (gameText);
     displayInfo();
    
}
  function statsInfo (gameText){
   var stats = document.getElementsByClassName("stats")[0];
   stats.innerText = gameText;
 }
  function displayInfo(){
      var name = document.getElementsByClassName("name")[0];
      var healsR = document.getElementsByClassName("healsR")[0];
      var health = document.getElementsByClassName("health")[0];
      var wins = document.getElementsByClassName("wins")[0];
      var eName = document.getElementsByClassName("eName")[0];
      var eHealth = document.getElementsByClassName("eHealth")[0];
      document.getElementById("healsR").value = character.healsRemaining;
      document.getElementById("wins").value = character.wins;
      document.getElementById("health").value = character.health;
      document.getElementById("eHealth").value = enemy.health;
    name.innerText = "Player: " + character.name ;
    healsR.innerText = character.name + "'s Heals: ";
    health.innerText = character.name + "'s Health: ";
    wins.innerText = character.name + "'s Wins: ";
    eName.innerText = "Enemy: " + enemy.name;
    eHealth.innerText = "Grant's Health: ";
}


