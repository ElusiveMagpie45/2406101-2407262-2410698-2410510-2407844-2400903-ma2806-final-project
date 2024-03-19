let tilemap = [];
let numDown = 20;
let numAcross = 20;
let tileSize = 50;
let textures = [];
let enemies = [];
let numEnemies = 5; 
let music;

let bullets = [];

let MENU = 0
let img2;


let graphicMap = [
    [5, 3, 3, 3, 5, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
    [5, 0, 0, 0, 5, 9, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [3, 4, 4, 0, 5, 8, 5, 1, 1, 1, 4, 2, 0, 0, 0, 2, 1, 1, 1, 5],
    [2, 3, 3, 0, 5, 6, 5, 0, 0, 0, 3, 1, 1, 1, 0, 1, 0, 0, 0, 5],
    [0, 0, 0, 0, 5, 6, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 5],
    [4, 4, 2, 0, 5, 6, 0, 0, 3, 1, 4, 0, 4, 0, 1, 2, 0, 4, 0, 5],
    [5, 5, 4, 0, 5, 7, 4, 0, 0, 0, 3, 0, 5, 0, 1, 1, 0, 5, 0, 5],
    [5, 3, 5, 0, 5, 0, 5, 0, 4, 0, 2, 0, 3, 0, 1, 1, 0, 3, 1, 5],
    [5, 0, 3, 0, 5, 0, 3, 1, 5, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 5],
    [5, 0, 0, 0, 3, 1, 2, 0, 3, 4, 0, 0, 0, 4, 1, 4, 1, 1, 1, 5],
    [5, 0, 2, 0, 0, 0, 0, 0, 2, 3, 0, 4, 1, 3, 0, 3, 0, 0, 0, 5],
    [5, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 2, 4, 5],
    [5, 0, 0, 0, 0, 2, 1, 1, 1, 0, 4, 5, 0, 4, 1, 0, 1, 1, 5, 5],
    [5, 2, 2, 1, 1, 4, 0, 0, 0, 0, 5, 5, 1, 5, 0, 0, 2, 0, 3, 3],
    [5, 1, 0, 0, 0, 3, 4, 4, 0, 4, 3, 3, 0, 5, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 2, 0, 2, 3, 5, 0, 5, 0, 0, 0, 5, 0, 0, 4, 0, 4, 4],
    [5, 0, 4, 4, 0, 0, 0, 5, 0, 5, 0, 1, 4, 5, 0, 4, 5, 0, 5, 5],
    [5, 0, 3, 3, 1, 1, 1, 3, 0, 3, 0, 2, 3, 3, 0, 3, 3, 1, 5, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
    [5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5]
]


let tileRules = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

// Player Variable Initialisation
    let player;
    let playerSprite;
    let playerSpeed = 5;
    let playerSize = tileSize;
    let gunSprite;
    let batterySprite;
    let enemySprite; 
    let enemySpeed; 


function preload() {
    //loads tile textures
    textures[0] = loadImage("plain.png")
    textures[1] = loadImage("bush.png")
    textures[2] = loadImage("log.png")
    textures[3] = loadImage("treeLow.png")
    textures[4] = loadImage("treeTop.png")
    textures[5] = loadImage("treeTwo.png")
    textures[6] = loadImage("mudslide.png")
    textures[7] = loadImage("mudslidebottom.png")
    textures[8] = loadImage("planeBottom.png")
    textures[9] = loadImage("planeTop.png")

    //loads player image
    playerSprite = loadImage("survivor.png")
    gunSprite = loadImage("newBattery.png")
    batterySprite = loadImage("gun.png") 
    enemySprite = loadImage("enemySprite.gif.png")
    
    img2 = loadImage('IMG_1716.PNG');
    
    //loads ambient music
    music = loadSound("ambientMusic.wav")


}
function setup() {
    createCanvas(1000, 1000);

    //plays ambient music
    music.loop();
    
    let tileID = 0; //this is the ID for the first tile

    //creates the other tiles
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize; //multiplies for pixel position on X
            let y = down * tileSize; //multiplies for pixel position on Y

            //Texture for Tile
            let textureNum = graphicMap[down][across];

            let item=null; //init item
            if(random() < 0.05 && textureNum == 0){
                item = random() < 0.5 ? gunSprite : batterySprite;
            }

            tilemap[across][down] = new Tile(textures[graphicMap[down][across]], x, y, tileSize, tileID,item);

            tileID++;
        }
    }
  

    // Creating player
    player = new Player(playerSprite, 0, 4, tileSize, playerSpeed, tileSize, tileRules,batterySprite,gunSprite)

    // Creating enemies
    for (let i = 0; i < numEnemies; i++) {
        let enemyX = random(width);
        let enemyY = random(height);
        enemies.push(new Enemy(enemyX, enemyY, tileSize, tileSize, enemySprite, enemySpeed));
    }
}


    //console.log(tilemap[4][6].tileID)
    //console.log(tilemap[4][6].x / tileSize);

    class Bullet {
        constructor(x, y, direction) {
            this.x = x;
            this.y = y;
            this.direction = direction; // Direction of the bullet
            this.speed = 10; // Speed of the bullet
            this.bulletImage = loadImage("bullet.png"); // Loading the bullet image
        }
    
        // Updating the bullet position
        update() {
            switch (this.direction) {
                case "left":
                    this.x -= this.speed;
                    break;
                case "right":
                    this.x += this.speed;
                    break;
                case "up":
                    this.y -= this.speed;
                    break;
                case "down":
                    this.y += this.speed;
                    break;
            }
        }
    
        
        display() {
            image(this.bulletImage, this.x, this.y);
        }
    }




    class Enemy {
    constructor(sprite, startAcross, startDown, size, speed, tileSize, tileRules) {
      
        this.sprite = sprite;

     
        this.across = startAcross;
        this.down = startDown;

     
        this.xPos = this.across * tileSize;
        this.yPos = this.down * tileSize;

      
        this.size = size;
        this.speed = speed;

  
        this.tileRules = tileRules;
        this.tileSize = tileSize;

     
        this.dirX = 0;
        this.dirY = 0;

 
        this.isMoving = false;

        this.tx = this.xPos;
        this.ty = this.yPos;
    }

    // Set direction of the enemy
    setDirection() {
        if (!this.isMoving) {
            // Randomize movement direction
            let direction = floor(random(4));
            switch (direction) {
                case 0: // UP
                    this.dirX = 0;
                    this.dirY = -1;
                    break;
                case 1: // DOWN
                    this.dirX = 0;
                    this.dirY = 1;
                    break;
                case 2: // LEFT
                    this.dirX = -1;
                    this.dirY = 0;
                    break;
                case 3: // RIGHT
                    this.dirX = 1;
                    this.dirY = 0;
                    break;
            }
            // Check the target tile
            this.checkTargetTile();
        }
    }

    // Check target tile for the enemy
    checkTargetTile() {
        // Obtain the tile that the enemy is standing on
        this.across = Math.floor(this.xPos / this.tileSize);
        this.down = Math.floor(this.yPos / this.tileSize);

        // Calculate the coordinates of the desired tile
        let nextTileHorizontal = this.across + this.dirX;
        let nextTileVertical = this.down + this.dirY;

        // Check if the next tile is within the map and if it's a walkable tile
        if (
            nextTileHorizontal >= 0 &&
            nextTileHorizontal < numAcross &&
            nextTileVertical >= 0 &&
            nextTileVertical < numDown &&
            this.tileRules[nextTileVertical][nextTileHorizontal] != 1
        ) {
            // Update the target tile coordinates
            this.tx = nextTileHorizontal * this.tileSize;
            this.ty = nextTileVertical * this.tileSize;
            // Set the enemy to moving
            this.isMoving = true;
        }
    }

    // Move the enemy
    move() {
        if (this.isMoving) {
            this.xPos += this.speed * this.dirX;
            this.yPos += this.speed * this.dirY;

            if (this.xPos === this.tx && this.yPos === this.ty) {
                this.isMoving = false;
                this.dirX = 0;
                this.dirY = 0;
            }
        }
    }

    // Display the enemy
    display() {
        imageMode(CORNER);
        image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    }
}
    


function keyPressed() {
    player.setDirection();
    // Check arrow key presses
    if (keyCode === LEFT_ARROW) {
        // Creating bullet moving left
        if (player.hasGun) { // Check if player has gun
            bullets.push(new Bullet(player.xPos, player.yPos + playerSize / 2, "left"));
        }
    } else if (keyCode === RIGHT_ARROW) {
        // Creating bullet moving right
        if (player.hasGun) { // Check if player has gun
            bullets.push(new Bullet(player.xPos + playerSize, player.yPos + playerSize / 2, "right"));
        }
    } else if (keyCode === UP_ARROW) {
        // Creating bullet moving up
        if (player.hasGun) { // Check if player has gun
            bullets.push(new Bullet(player.xPos + playerSize / 2, player.yPos, "up"));
        }
    } else if (keyCode === DOWN_ARROW) {
        // Creating bullet moving down
        if (player.hasGun) { // Check if player has gun
            bullets.push(new Bullet(player.xPos + playerSize / 2, player.yPos + playerSize, "down"));
        }
    }
}




class Player {
    constructor(sprite, startAcross, startDown, size, speed, tileSize, tileRules,gunSprite,batterySprite) {
        //Sprite to key object
        this.sprite = sprite;

        //Starting tile info storage
        this.across = startAcross;
        this.down = startDown;
        //items props
        this.hasGun = false;
        this.hasBattery = false;
        this.gunSprite = gunSprite;
        this.batterySprite = batterySprite;
        this.gunUsed = false;
        this.batteryUsed = false;
        this.batteryTime = 0;

        //tile co-ords into pixel co-ords
        this.xPos = this.across * tileSize;
        this.yPos = this.down * tileSize;

        //size + speed
        this.size = size;
        this.speed = speed;

        //rules regarding movement/collision
        this.tileRules = tileRules;
        this.tileSize = tileSize;

        //properties of player movement + direction of movement
        this.dirX = 0;
        this.dirY = 0;

        //decides when a player is moving to another tile currently
        this.isMoving = false;

        //x y of the tile in which the player is moving towards
        this.tx = this.xPos;
        this.ty = this.yPos;

        this.batteryEffectTimer = 0;
        this.originalSpotlightRadius = spotlightRadius;
        this.spotlightExpanding = false;

    } 
pickUpItem(item) {
    if (item === this.batterySprite) {
        this.hasBattery = true;
        // Apply battery effect
        this.applyBatteryEffect();
        
    } else if (item === this.gunSprite) {
        this.hasGun = true;
        
    }
}


    applyBatteryEffect() {
        // Set the spotlight radius to see whole map
        spotlightRadius = 10000;
        this.spotlightExpanding = true;
        this.batteryEffectTimer = 5 * 60; // 5 seconds
    }

    updateBatteryEffect() {
        if (this.spotlightExpanding && this.batteryEffectTimer > 0) {
            this.batteryEffectTimer--;
            if (this.batteryEffectTimer === 0) {
                // Reset spotlight radius and effect
                spotlightRadius = this.originalSpotlightRadius;
                this.spotlightExpanding = false;
            }
        }
    }
    // use gun
    useGun() {
        if (this.hasGun && !this.gunUsed) {
            // kill 
            this.gunUsed = true;
        }
    }

    // use battery makes lightly
    useBattery() {
        if (this.hasBattery && !this.batteryUsed) {
            // 10s
            this.batteryUsed = true
            this.batteryTime = 10 * 60; //  
        }
    }
    updateBattery() {
        if (this.batteryUsed && this.batteryTime > 0) {
            this.batteryTime--;
            if (this.batteryTime === 0) {
                this.batteryUsed = false;
            }
        }
    }
    //WASD and the directions
    setDirection() {
        if (!this.isMoving) {
            
            //UP
            if (key === "w") {
                this.dirX = 0;
                this.dirY = -1; //direction is up!
            }

            //DOWN
            if (key === "s") {
                this.dirX = 0;
                this.dirY = 1; //direction is down!
            }

            //LEFT
            if (key === "a") {
                this.dirX = -1; //direction is left!
                this.dirY = 0; 
            }

            //RIGHT
            if (key === "d") {
                this.dirX = 1; //direction is right!
                this.dirY = 0;
            }
            
            //the direction of the player is set!
            this.checkTargetTile();
        }
    }
 //decides what tile the player wants to move towards and if there is a collision there.
    checkTargetTile() {
       //obtains the tile that the player is standing on
        this.across = Math.floor(this.xPos / this.tileSize);
        this.down = Math.floor(this.yPos / this.tileSize);
        
        //finds out the co-ords of the desired tile
        let nextTileHorizontal = this.across + this.dirX;
        let nextTileVertical = this.down + this.dirY;

// calculates the availability of the tile (in terms of whether it's within bounds)
    if (
        nextTileHorizontal >= 0 && //top
        nextTileHorizontal < numAcross && //bottom
        nextTileVertical >= 0 && //left edge
        nextTileVertical < numDown //right edge
    ) {
        //if within map then moveable (using ruleMap)
        if (this.tileRules[nextTileVertical][nextTileHorizontal] != 1) {
        
        //walkable tiles get the x and y co-ords calculated
        this.tx = nextTileHorizontal * this.tileSize;
        this.ty = nextTileVertical *this.tileSize;
        //set to moving character
        this.isMoving = true;

        }
    }
}

move() {
    if (this.isMoving) {
        this.xPos += this.speed * this.dirX;
        this.yPos += this.speed * this.dirY;

    if(this.xPos === this.tx && this.yPos === this.ty) {
        this.isMoving = false;
        this.dirX = 0;
        this.dirY = 0;
        }
    }
}

display() {
    imageMode(CORNER);
    image(this.sprite, this.xPos, this.yPos, this.size, this.size);
}

}
let spotlightRadius = 150; // how big the radius of the spotlight is


class Tile {
    constructor(texture, x, y, tileSize, tileID,item=null) {
        this.texture = texture;
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileID = tileID;
        this.visible = false;//Adding visibility
        this.item=item;//to save  gun&battery
    }
    display() {
        // check if the tile is within the visibility
        if (dist(player.xPos, player.yPos, this.x + this.tileSize / 2, this.y + this.tileSize / 2) < spotlightRadius) {
            this.visible = true;
        } else {
            this.visible = false;
        }

        
        if (this.visible) {
            noStroke();
            image(this.texture, this.x, this.y, this.tileSize, this.tileSize);
        }

        // check if the item is within the visibility
        if (this.item && this.visible) {
            // only displaying the item if it's within the spotlight area
            image(this.item, this.x, this.y, this.tileSize, this.tileSize);
        }
    }
    debug() {
        //TILE
        stroke(245);
        fill(55);
        rect(this.x, this.y, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        fill(245);
        textAlign(LEFT, TOP);
        text(this.tileID, this.x, this.y);
    }
}






function draw() {   // START GAME
  print(mouseX, mouseY)
  background(0);
  fill(0, 255, 0, 50);
  rect(50, 50, 200, 75);
  fill(255, 0, 255, 50);
  rect(50, 200, 200, 75);
  textSize(50)
  fill(255);
  text('START', 70, 106);
  
  textSize(26);
  text('INSTRUCTIONS', 52, 248);
  image(img2, 250, 0, 800, 800);

  if (MENU == 1) {
    background(0);
    
    // Loop through tiles to display them
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display(); // Display each tile
        }
    }
    
    // Update and display bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].update();
        bullets[i].display();
        // Remove bullets that go off-screen
        if (bullets[i].x < 0 || bullets[i].x > width || bullets[i].y < 0 || bullets[i].y > height) {
            bullets.splice(i, 1);
        }
    }
    
    
    player.display();
    player.move();
    player.updateBatteryEffect(); //update battery

    // Calculate the visibility area around the player
    let startX = max(0, player.across - floor(spotlightRadius / tileSize));
    let endX = min(numAcross - 1, player.across + floor(spotlightRadius / tileSize));
    let startY = max(0, player.down - floor(spotlightRadius / tileSize));
    let endY = min(numDown - 1, player.down + floor(spotlightRadius / tileSize));
  
    // A loop of tiles for everytime the draw function is used
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            let currentTile = tilemap[across][down];
            if (currentTile.item && dist(player.xPos, player.yPos, currentTile.x, currentTile.y) < tileSize) {
                player.pickUpItem(currentTile.item);
                currentTile.item = null; // items are removed from the map after being picked up
                }
            }
        }
        


      
    //fill(0)
    //textSize(20)
    //text('Right Click to return to MENU', 525, 30)
    //if (mouseButton == RIGHT) {
     // MENU = 0
    }
  if (MENU == 2) { // INSTRUCTIONS
    background(0)
    textSize(20)
    text('Right Click to return to MENU', 525, 30)
    textSize(30)
    text('-use WASD to move the character', 50, 150)
    text('-navigate the maze', 50, 200)
    text('-pick up batteries to expand your view', 50, 240)
    text('-defeat enemies', 50, 290)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  }

}

function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 200 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
          userStartAudio(); //starts music on mouse click
      }
      if (mouseY < 275 && mouseY > 200) {
        MENU = 2
      }
    }
  }
}
