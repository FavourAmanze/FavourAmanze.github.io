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
          /*
          { type: "comet", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          
          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: , x: , y: , velocityX: , damage: , score:},
          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: , x: , y: , velocityX: , damage: , score:},

          { type: "stardust", image: , offsetX: , offsetY, x: , y: , velocityX: , score: ,},
          
          { type: "obsidian", image: , offsetX: , offsetY, x: , y: , velocityX: , score: ,},

          // { type: "level", image: , offsetX: , offsetY: , x: , y: , velocityX:},
        ],
      },
      {
        name: "Another Phase",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "moon crater", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          { type: "moon crater", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},

          { type: "comet", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},

          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: , x: , y: , velocityX: , damage: , score:},
          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: , x: , y: , velocityX: , damage: , score:},

          { type: "stardust", image: , offsetX: , offsetY, x: , y: , velocityX: , score: ,},
          { type: "stardust", image: , offsetX: , offsetY, x: , y: , velocityX: , score: ,},
          
          { type: "obsidian", image: , offsetX: , offsetY, x: , y: , velocityX: , score: ,},

          // { type: "level", image: , offsetX: , offsetY: , x: , y: , velocityX:},
        ],
      },

      {
        name: "Full Moon",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "moon crater", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          { type: "moon crater", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          { type: "moon crater", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},

          { type: "comet", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: , x: , y: , image: , imageX: , imageY: , scaleX: , scaleY:},

          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: , x: , y: , velocityX: , damage: , score:},
          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: , x: , y: , velocityX: , damage: , score:},
          
         // { type: "moon keeper", hitBoxSize: , hitBoxX: , hitBoxY: , image: , x: , y: , velocityX: , damage: , score:},

          { type: "stardust", image: , offsetX: , offsetY, x: , y: , velocityX: , score: ,},
          { type: "stardust", image: , offsetX: , offsetY, x: , y: , velocityX: , score: ,},
          { type: "stardust", image: , offsetX: , offsetY, x: , y: , velocityX: , score: ,},

          { type: "obsidian", image: , offsetX: , offsetY, x: , y: , velocityX: , score: ,},
          */
         
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
