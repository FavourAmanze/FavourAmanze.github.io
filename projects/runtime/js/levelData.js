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
          { type: "comet", hitSize: , damage: 5, x: , y: , image: "img/comet.png" , imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: 5, x: , y: , image: "img/comet.png", imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: 5, x: , y: , image: "img/comet.png" , imageX: , imageY: , scaleX: , scaleY:},
          
          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: "img/rover.png", x: , y: , velocityX: , damage: 10, score: 10},
          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: "img/rover.png", x: , y: , velocityX: , damage: 10, score: 10},

          { type: "stardust", image: "img/stardust.png", offsetX: , offsetY, x: , y: , velocityX: , score: 15,},
          
          { type: "obsidian", image: "img/obsidian.png", offsetX: , offsetY, x: , y: , velocityX: , score: 20,},

          // { type: "level", image: "img/flag.png", offsetX: , offsetY: , x: , y: , velocityX:},
        ],
      },
      {
        name: "Another Phase",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "moon crater", hitSize: , damage: 5, x: , y: , image: "img/moon_crater.png" , imageX: , imageY: , scaleX: , scaleY:},
          { type: "moon crater", hitSize: , damage: 5, x: , y: , image: "img/moon_crater.png", imageX: , imageY: , scaleX: , scaleY:},

          { type: "comet", hitSize: , damage: 5, x: , y: , image: "img/comet.png", imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: 5, x: , y: , image: "img/comet.png", imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: 5, x: , y: , image: "img/comet.png", imageX: , imageY: , scaleX: , scaleY:},

          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: "img/rover.png", x: , y: , velocityX: , damage: 10, score: 10},
          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: "img/rover.png", x: , y: , velocityX: , damage: 10, score: 10},

          { type: "stardust", image: "img/stardust.png", offsetX: , offsetY, x: , y: , velocityX: , score: 15,},
          { type: "stardust", image: "img/stardust.png", offsetX: , offsetY, x: , y: , velocityX: , score: 15,},
          
          { type: "obsidian", image: "img/obsidian.png", offsetX: , offsetY, x: , y: , velocityX: , score: 20,},

          // { type: "level", image: "img/flag.png", offsetX: , offsetY: , x: , y: , velocityX:},
        ],
      },

      {
        name: "Full Moon",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "moon crater", hitSize: , damage: 5, x: , y: , image: "img/moon_crater.png", imageX: , imageY: , scaleX: , scaleY:},
          { type: "moon crater", hitSize: , damage: 5, x: , y: , image: "img/moon_crater.png", imageX: , imageY: , scaleX: , scaleY:},
          { type: "moon crater", hitSize: , damage: 5, x: , y: , image: "img/moon_crater.png", imageX: , imageY: , scaleX: , scaleY:},

          { type: "comet", hitSize: , damage: 5, x: , y: , image: "img/comet.png", imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: 5, x: , y: , image: "img/comet.png", imageX: , imageY: , scaleX: , scaleY:},
          { type: "comet", hitSize: , damage: 5, x: , y: , image: "img/comet.png", imageX: , imageY: , scaleX: , scaleY:},

          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: "img/rover.png", x: , y: , velocityX: , damage: 10 , score: 10},
          { type: "rover", hitBoxSize: , hitBoxX: , hitBoxY: , image: "img/rover.png", x: , y: , velocityX: , damage: 10, score: 10},
          
         // { type: "moon keeper", hitBoxSize: , hitBoxX: , hitBoxY: , image: "img/moon_keeper.png", x: , y: , velocityX: , damage: 100, score:},

          { type: "stardust", image: "img/stardust.png", offsetX: , offsetY, x: , y: , velocityX: , score: 15,},
          { type: "stardust", image: "img/stardust.png", offsetX: , offsetY, x: , y: , velocityX: , score: 15,},
          { type: "stardust", image: "img/stardust.png", offsetX: , offsetY, x: , y: , velocityX: , score: 15,},

          { type: "obsidian", image: "img/obsidian.png", offsetX: , offsetY, x: , y: , velocityX: , score: 20,},
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
