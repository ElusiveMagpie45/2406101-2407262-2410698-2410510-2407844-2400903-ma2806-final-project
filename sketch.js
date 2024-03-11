let tilemap = [];
let numDown = 20;
let numAcross = 20;
let tileSize = 50;
let textures = [];


let graphicMap = [
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
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1],
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

function preload() {
    //loads tile textures
    textures[0] = loadImage("plain.png")
    textures[1] = loadImage("obstacle.png")

    //loads player image
    playerSprite = loadImage("survivor.png")
    gunSprite=loadImage("gun.png")
    batterySprite=loadImage("battery.png") 


}

function setup() {
    createCanvas(1000, 1000);

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
            if(random() < 0.05 && textureNum !== 1){
                item = random() < 0.5 ? gunSprite : batterySprite;
            }

            tilemap[across][down] = new Tile(textures[graphicMap[down][across]], x, y, tileSize, tileID,item);

            tileID++;
        }
    }
  

    //console.log(tilemap[4][6].tileID)
    //console.log(tilemap[4][6].x / tileSize);

    player = new Player(playerSprite, 0, 4, tileSize, playerSpeed, tileSize, tileRules,batterySprite,gunSprite)
}

function draw() {
    background(0);
    player.display();
    player.move();
    player.updateBattery(); //update battery

  // Calculate the visibility area around the player
  let startX = max(0, player.across - floor(spotlightRadius / tileSize));
  let endX = min(numAcross - 1, player.across + floor(spotlightRadius / tileSize));
  let startY = max(0, player.down - floor(spotlightRadius / tileSize));
  let endY = min(numDown - 1, player.down + floor(spotlightRadius / tileSize));
  
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            let currentTile = tilemap[across][down];
            if (currentTile.item && dist(player.xPos, player.yPos, currentTile.x, currentTile.y) < tileSize) {
                player.pickUpItem(currentTile.item);
                currentTile.item = null; // items are removed from the map after being picked up
            }
        }
    }
    //A loop of tiles for every time that draw function is used
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            
            //tilemap[across][down].debug(); //runs a debug on every tile
            tilemap[across][down].display(); //runs a display for every tile

        }
    }
    player.display();
    player.move();
}

function keyPressed() {
    player.setDirection();
    
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

    } pickUpItem(item) {
        if (item === this.gunSprite) {
            this.hasGun = true;
        } else if (item === this.batterySprite) {
            this.hasBattery = true;
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
            this.batteryUsed = true;
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
        this.visible=false;//Adding visibility
        this.item=item;//to save  gun&battery
    }
    display() {
          // check if the tile is within the visibility
          if (dist(player.xPos, player.yPos, this.x + this.tileSize / 2, this.y + this.tileSize / 2) < spotlightRadius) {
            this.visible = true;
        } else {
            this.visible = false;
        }
        //displays texture of instances of NPCs
        if(this.visible){
        noStroke();
        image(this.texture, this.x, this.y, this.tileSize, this.tileSize);}
        //if has items
        if (this.item) {
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
