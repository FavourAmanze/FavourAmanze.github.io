var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Welcome to the Moon",
        number: 1,
        speed: -3,
        gameItems: [
          /*
          { type: "sawblade", x: 400, y: groundY - 90, hitSize: 5, damage: 10, image: "img/sawblade.png"},
          { type: "sawblade", x: 800, y: groundY - 90, hitSize: 5, damage: 25, image: "img/sawblade.png"},
          { type: "sawblade", x: 1200, y: groundY - 90, hitSize: 5, damage: 10, image: "img/sawblade.png"},
          
          { type: "enemy", x: 2500, y: groundY - 50, speed: 5, damage: 10, score: 5},
          { type: "enemy", x: 4000, y: groundY - 50, speed: 4, damage: 15, score: 1000},
          
          { type: "reward", x: 1200, y: groundY - 50, speed: 5, score: 500},

          { type: "level", x: 5000, y: groundY - 50, speed: 3},
          */
          
          
          { type: "comet", hitSize: 25, damage: 10, x: 1500, y: groundY - 120, image: "img/comet.png" , imageX: - 70, imageY: -70, scaleX: 0.4, scaleY: 0.4, speed: 2},
          { type: "comet", hitSize: 25, damage: 10, x: 3000, y: groundY - 120, image: "img/comet.png" , imageX: - 70, imageY: -70, scaleX: 0.4, scaleY: 0.4, speed: 2},
          { type: "comet", hitSize: 25, damage: 10, x: 5000, y: groundY - 120, image: "img/comet.png" , imageX: - 70, imageY: -70, scaleX: 0.4, scaleY: 0.4, speed: 2},
          
          { type: "rover", hitBoxSize: 50, hitBoxX: -90, hitBoxY: -145, image: "img/rover.png", x: 2500, y: groundY - 50, velocityX: 2.5, damage: -15, score: 10, scaleX: 0.5, scaleY: 0.5},
          { type: "rover", hitBoxSize: 50, hitBoxX: -90, hitBoxY: -145, image: "img/rover.png", x: 7000, y: groundY - 50, velocityX: 2.5, damage: -15, score: 10, scaleX: 0.5, scaleY: 0.5}, 
          
          { type: "stardust", image: "img/stardust.png", offsetX: -75, offsetY: -85, x: 4000, y: groundY - 100, velocityX: 2, score: 15, scaleX: 0.4, scaleY: 0.4}, 
          
          { type: "obsidian", image: "img/obsidian.png", offsetX: -75, offsetY: -85, x: 900, y: groundY - 100, velocityX: 2, score: 20, scaleX: 0.4, scaleY: 0.4}, 

          { type: "level", image: "img/flag.png", offsetX: -100, offsetY: -100, x: 7000, y: groundY - 60, speed: 2, scaleX: 0.5, scaleY: 0.5}, 
        ],
      },
      {
        name: "Another Phase",
        number: 2,
        speed: -3,
        gameItems: [
          
          { type: "moon crater", hitSize: 40, damage: 10, x: 1000, y: groundY + 10, image: "img/moon_crater.png" , imageX: - 75, imageY: -90, scaleX: 0.3, scaleY: 0.5, speed: 2},
          { type: "moon crater", hitSize: 40, damage: 10, x: 4200, y: groundY + 10, image: "img/moon_crater.png" , imageX: - 75, imageY: -90, scaleX: 0.3, scaleY: 0.5, speed: 2},
          
          { type: "comet", hitSize: 25, damage: 10, x: 2500, y: groundY - 120, image: "img/comet.png" , imageX: - 70, imageY: -70, scaleX: 0.4, scaleY: 0.4, speed: 3},
          { type: "comet", hitSize: 25, damage: 10, x: 4000, y: groundY - 120, image: "img/comet.png" , imageX: - 70, imageY: -70, scaleX: 0.4, scaleY: 0.4, speed: 3},
          { type: "comet", hitSize: 25, damage: 10, x: 6700, y: groundY - 120, image: "img/comet.png" , imageX: - 70, imageY: -70, scaleX: 0.4, scaleY: 0.4, speed: 3},

          { type: "rover", hitBoxSize: 50, hitBoxX: -90, hitBoxY: -145, image: "img/rover.png", x: 4000, y: groundY - 50, velocityX: 3.5, damage: -15, score: 10, scaleX: 0.5, scaleY: 0.5},
          { type: "rover", hitBoxSize: 50, hitBoxX: -90, hitBoxY: -145, image: "img/rover.png", x: 5200, y: groundY - 50, velocityX: 3.5, damage: -15, score: 10, scaleX: 0.5, scaleY: 0.5},

          { type: "stardust", image: "img/stardust.png", offsetX: -75, offsetY: -85, x: 900, y: groundY - 100, velocityX: 3, score: 15, scaleX: 0.4, scaleY: 0.4}, 
          { type: "stardust", image: "img/stardust.png", offsetX: -75, offsetY: -85, x: 5500, y: groundY - 100, velocityX: 3, score: 15, scaleX: 0.4, scaleY: 0.4}, 
          
          { type: "obsidian", image: "img/obsidian.png", offsetX: -75, offsetY: -85, x: 3000, y: groundY - 100, velocityX: 3, score: 20, scaleX: 0.4, scaleY: 0.4},

          { type: "level", image: "img/flag.png", offsetX: -100, offsetY: -100, x: 7500, y: groundY - 60, speed: 3, scaleX: 0.5, scaleY: 0.5}, 
        ],
      },

      {
        name: "Full Moon",
        number: 3,
        speed: -3,
        gameItems: [
         
          { type: "moon crater", hitSize: 40, damage: 10, x: 2500, y: groundY + 10, image: "img/moon_crater.png" , imageX: - 75, imageY: -90, scaleX: 0.3, scaleY: 0.5, speed: 3},
          { type: "moon crater", hitSize: 40, damage: 10, x: 3500, y: groundY + 10, image: "img/moon_crater.png" , imageX: - 75, imageY: -90, scaleX: 0.3, scaleY: 0.5, speed: 3},
          { type: "moon crater", hitSize: 40, damage: 10, x: 4500, y: groundY + 10, image: "img/moon_crater.png" , imageX: - 75, imageY: -90, scaleX: 0.3, scaleY: 0.5, speed: 3},
         
          { type: "comet", hitSize: 25, damage: 10, x: 3700, y: groundY - 120, image: "img/comet.png" , imageX: - 70, imageY: -70, scaleX: 0.4, scaleY: 0.4, speed: 4},
          { type: "comet", hitSize: 25, damage: 10, x: 5000, y: groundY - 120, image: "img/comet.png" , imageX: - 70, imageY: -70, scaleX: 0.4, scaleY: 0.4, speed: 4},
          { type: "comet", hitSize: 25, damage: 10, x: 6500, y: groundY - 120, image: "img/comet.png" , imageX: - 70, imageY: -70, scaleX: 0.4, scaleY: 0.4, speed: 4},

          { type: "rover", hitBoxSize: 50, hitBoxX: -90, hitBoxY: -145, image: "img/rover.png", x: 2000, y: groundY - 50, velocityX: 4.5, damage: -15, score: 10, scaleX: 0.5, scaleY: 0.5},
          { type: "rover", hitBoxSize: 50, hitBoxX: -90, hitBoxY: -145, image: "img/rover.png", x: 8000, y: groundY - 50, velocityX: 4.5, damage: -15, score: 10, scaleX: 0.5, scaleY: 0.5},
          
         { type: "moon keeper", hitBoxSize: 50, offsetX: - 150, offsetY: - 250 ,  x: 10000, y: groundY - 90, speed: 4, health: 150, img: "img/moon_keeper.png", scaleX: 1, scaleY: 1},
          
          { type: "stardust", image: "img/stardust.png", offsetX: -75, offsetY: -85, x: 1000, y: groundY - 100, velocityX: 3, score: 15, scaleX: 0.4, scaleY: 0.4}, 
          { type: "stardust", image: "img/stardust.png", offsetX: -75, offsetY: -85, x: 5500, y: groundY - 100, velocityX: 3, score: 15, scaleX: 0.4, scaleY: 0.4}, 
          { type: "stardust", image: "img/stardust.png", offsetX: -75, offsetY: -85, x: 7500, y: groundY - 100, velocityX: 3, score: 15, scaleX: 0.4, scaleY: 0.4}, 
        
          { type: "obsidian", image: "img/obsidian.png", offsetX: -75, offsetY: -85, x: 10010, y: groundY - 100, velocityX: 3, score: 20, scaleX: 0.4, scaleY: 0.4},
          
         
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
