var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        
        var buildings = [];
        var moon;
        var mountain1;
        

        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function backgroundElement (variable, img, xAdd, yAdd, scaleX, scaleY){
            variable = draw.bitmap(img); // creates a bitmap for any background image and stores it in a variable
            variable.x = canvasWidth + xAdd; // place the background element to the right side of the canvas + (or minus) xAdd (a number)
            variable.y = groundY + yAdd; // place the background object above ground (adjusted for height/ yAdd)
            variable.scaleX = scaleX; //scales the background object's width
            variable.scaleY = scaleY; //scales the background object's height
            background.addChild(variable); // adds the background element to the background container
        }

        function moveElement (variable, speed, leftSide){
            variable.x -= speed; // moves the tree to the left by subtracting speed from its current x pos
            if (variable.x < leftSide){
                variable.x = canvasWidth;
            } // checks if the tree goes off the left side of the canvas and if it does it reset the x pos of the tree to the right side of the canvas 
        }
        
        
        function render() {
            background.removeAllChildren(); 

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black'); // draws a rectangle and stores it in the variable background fill
            background.addChild(backgroundFill); // adds the background rectangle to the bacground container so it is visible
            
            // TODO 2: - Add a moon and starfield
            for (var i = 0; i < 100; i++){
                var circle = draw.circle(0.5, "white", "white", 2); // create a circle with a specified radius, border color, fill color, alpha and store it in the variable circle
                circle.x = canvasWidth * Math.random(); // set random x position within canvas width
                circle.y = groundY * Math.random(); // set random y position within groundY range
                background.addChild(circle); // adds the star to the background container
            }
            /*
            var moon = draw.bitmap("img/moon.png"); // creates a bitmap object using the moon image and stores it in the moon variable
            moon.x = canvasWidth - 400; //sets the moon's x position 
            moon.y = groundY - 400; // sets the moon's y position
            moon.scaleX = .25; //scales the moon's width
            moon.scaleY = .25; //scales the moon's height
            background.addChild(moon); // add the moon to the background container so it's visible
            */
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            /*for (var i = 0; i < 5; i++) {
                var buildingColors = ["red", "purple", "yellow", "orange", "pink"]
                var buildingHeight = 300 * Math.random (); // assign 300 to the building height variable
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1); // draws a rect with 75 width, buildingHeight is the height, lightgrey is the fill color, black is the outline, and 1 is the outline width
                building.x = 200 * i; // multiply 200 by the current i value and stores it as the x pos for the building
                building.y = groundY - buildingHeight; // takes the groundY, subtracts the buildingHeight and stores it as the y value
                background.addChild(building); // add our bulding to the background container
                buildings.push(building); // add the building to the buildings array for further manipulation
              } */
            
            // TODO 3: Part 1 - Add a tree
           /* tree = draw.bitmap("img/tree.png"); // creates a bitmap for the tree image and stores it in the variable tree
            tree.x = canvasWidth; // place the tree off screen to the right
            tree.y = groundY - 230; // place the tree above ground (adjusted for tree height)
            background.addChild(tree); // adds the tree to the background container  */
            backgroundElement (mountain1, "img/");
            backgroundElement (moon, "img/moon_surface.png", -2000, -750, 2, 2);
            

            

            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            moveElement ();
            
            
            // TODO 3: Part 2 - Move the tree!
           /* tree.x -= 3; // moves the tree to the left by subtracting 3 from its current x pos
            if (tree.x < -200){
                tree.x = canvasWidth;
            } // checks if the tree goes off the left side of the canvas and if it does it reset the x pos of the tree to the right side of the canvas */

            
            
            // TODO 4: Part 2 - Parallax
           /* for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i]; // the individual index of the buildings array stored in a variable
                building.x -= 1; // subrtacts 1 from the building's x pos, animating it to the left
                if (building.x < -200){ // checks if the x pos of the bilding is less than -200
                    building.x = canvasWidth; // if true, reset building's x pos to the right of canvas
                }
                // 
              } */

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
