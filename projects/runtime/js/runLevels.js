var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles(x, y, hitSize, damage){
      var hitZoneSize = hitSize; // define the seize of the hitzone and assign to variable
      var damageFromObstacle = damage; // defines the amount of damage obstacle and assigns to a variable
      var ObstaclesHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle hitzone using the size and damage as parameters
      ObstaclesHitZone.x = x; // sets the x coordinate of the Obstacles
      ObstaclesHitZone.y = y; // sets the y coordinate of the Obstacles
      game.addGameItem(ObstaclesHitZone); //  adds the Obstacles hitzone to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); // draw the Obstacles image bitmap and store it in var obstacleImage
      ObstaclesHitZone.addChild(obstacleImage); // attaches the image to the Obstacles hitzone
      obstacleImage.x = -25; // position the image on the hitzone's x value by moving it left 25 pixels
      obstacleImage.y = -25; // position the image on the hitzone's y value by moving it up 25 pixels
    }
    /*
    createObstacles(400, groundY - 50, 25, 10);
    createObstacles(800, groundY - 50, 100, 25);
    createObstacles(1200, groundY - 50, 25, 10);
    */
    
    function createEnemy (x, y, velocityX, integrity, score) {
      var enemy = game.createGameItem("enemy", 25); // creates enemy game item and add it to the game
      var redSquare = draw.rect(50, 50, "red"); // creates a red square and stores it in the var redSqure
      redSquare.x = -25; // offsets the image from the hitzone by -25 pixels
      redSquare.y = -25; // offsets the image from the hitzone by -25 pixels
      enemy.addChild(redSquare); // adds the red square as a child to the enemy variable
      enemy.x = x; // x pos of enemy
      enemy.y = y; // y pos of enemy
      game.addGameItem(enemy); // adds enemy to the game
      enemy.velocityX -= velocityX; // conrolling how fast the enemy moves on the x axis
      enemy.velocityY -= 0; // conrolling how fast the enemy moves on the y axis
      enemy.rotationalVelocity = 0; // sets the rotational velocity of the enemy
      
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(integrity) // subtracts 10 health from halleBot's HUD
      }
      enemy.onProjectileCollision = function (){
        game.increaseScore(score); // increase the score when halle shoots enemy
        enemy.fadeOut(); // enemy fades out when halle shoots enemy
        // enemy.shrink (); // enemy shrinks when shoots it
        // enemy.flyTo (0, 0); // enemy flies to these x, y coords when halle shoots it
      }

    }
    /*
    createEnemy(500, groundY - 50, 3, 10, 5);
    createEnemy(1000, groundY - 50, 8, 15, 1000);
    */
    function createReward (x, y, velocityX, score) {
      var reward = game.createGameItem("reward", 25); // creates reward game item and add it to the game
      var blueSquare = draw.rect(50, 50, "blue"); // creates a blue square and stores it in the var blueSquare
      blueSquare.x = -25; // offsets the image from the hitzone by -25 pixels
      blueSquare.y = -25; // offsets the image from the hitzone by -25 pixels
      reward.addChild(blueSquare); // adds the blue square as a child to the reward variable
      reward.x = x; // x pos of reward
      reward.y = y; // y pos of reward
      game.addGameItem(reward); // adds reward to the game
      reward.velocityX -= velocityX; // cotrolling how fast the reward moves on the x axis
      reward.velocityY -= 0; // controlling how fast the reward moves on the y axis
      reward.rotationalVelocity = 0; // sets the rotational velocity of the reward
      
      reward.onPlayerCollision = function () {
        game.increaseScore(score); // increase the score when halle collects reward
        reward.fadeOut(); // reward fades out when halle collides with it
        // reward.shrink (); // reward shrinks when halle colldies with it
        // reward.flyTo (0, 0); // reward flies to these x, y coords when halle collides with it
      }
    }

   // createReward(800, groundY - 50, 5, 500);

    function createLevel (x, y, velocityX) {
      var level = game.createGameItem("level", 25); // creates level game item and add it to the game
      var yellowSquare = draw.rect(50, 50, "yellow"); // creates a yellow square and stores it in the var yellowSquare
      yellowSquare.x = -25; // offsets the image from the hitzone by -25 pixels
      yellowSquare.y = -25; // offsets the image from the hitzone by -25 pixels
      level.addChild(yellowSquare); // adds the yellow square as a child to the level variable
      level.x = x; // x pos of level
      level.y = y; // y pos of level
      game.addGameItem(level); // adds level to the game
      level.velocityX -= velocityX; // cotrolling how fast the level moves on the x axis
      level.velocityY -= 0; // controlling how fast the level moves on the y axis
      level.rotationalVelocity = 0; // sets the rotational velocity of the level
      
      level.onPlayerCollision = function () {
          level.shrink (); // level shrinks when Halle collides with it
          startLevel (); // begins the next level
          }
    }

   // createLevel(2000, groundY - 50, 3);

    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel]; // fetches the current level from the levelData array and stores it in var level
      var levelObjects = level.gameItems // retrieve the array of gameItems and stores it in levelObjects
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element. type === "sawblade"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createObstacles(element.x, element.y, element.hitSize, element.damage); // if the condition is true it will call the relevant function
        }

        if(element. type === "enemy"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createEnemy(element.x, element.y, element.speed, element.damage); // if the condition is true it will call the relevant function
        }

        if(element. type === "reward"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createReward(element.x, element.y, element.speed, element.score); // if the condition is true it will call the relevant function
        }

        if(element. type === "level"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createLevel(element.x, element.y, element.speed); // if the condition is true it will call the relevant function
        }
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
