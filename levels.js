const beginningObject = {
    numAcross: 20,
    numDown: 20,


graphicMap: [
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
],

tileRules: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
],
}

const middleObject = {
    numAcross: 20,
    numDown: 20,


graphicMap: [
    [5, 3, 5, 5, 5, 5, 3, 3, 5, 5, 4, 4, 5, 3, 5, 4, 5, 0, 5, 5],
    [4, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 5, 5, 0, 5, 5],
    [5, 0, 4, 5, 0, 0, 5, 0, 0, 5, 0, 5, 0, 5, 0, 5, 5, 0, 5, 5],
    [5, 0, 4, 5, 0, 4, 5, 5, 0, 0, 0, 5, 0, 3, 5, 5, 4, 0, 3, 4],
    [5, 0, 2, 5, 0, 4, 3, 3, 4, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 3],
    [5, 0, 3, 0, 0, 4, 5, 0, 0, 0, 5, 5, 0, 5, 4, 3, 5, 5, 5, 5],
    [5, 0, 4, 0, 0, 3, 5, 5, 5, 0, 5, 4, 0, 5, 0, 4, 0, 5, 5, 5],
    [5, 0, 4, 3, 0, 5, 4, 4, 3, 0, 5, 5, 0, 4, 0, 5, 0, 5, 0, 5],
    [5, 0, 5, 4, 0, 5, 5, 4, 3, 0, 5, 5, 0, 3, 0, 5, 0, 4, 0, 4],
    [5, 0, 5, 4, 0, 5, 0, 0, 5, 0, 0, 0, 0, 3, 0, 5, 0, 5, 0, 5],
    [4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 5, 4, 5, 3, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 5, 5, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 4, 5, 0, 4],
    [5, 0, 5, 0, 2, 4, 0, 5, 4, 5, 0, 0, 0, 5, 0, 5, 0, 5, 4, 5],
    [3, 5, 5, 0, 4, 5, 0, 3, 5, 5, 4, 4, 0, 3, 0, 5, 0, 5, 5, 5],
    [0, 0, 0, 0, 3, 5, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 4, 2, 5],
    [4, 5, 5, 0, 2, 0, 0, 3, 4, 0, 0, 5, 4, 2, 4, 4, 0, 3, 0, 5],
    [5, 0, 5, 0, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 4, 3, 0, 2, 0, 5],
    [5, 0, 5, 0, 4, 4, 5, 3, 5, 2, 5, 0, 5, 0, 5, 5, 4, 5, 0, 5],
    [5, 0, 0, 0, 0, 0, 3, 5, 5, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 5],
    [5, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 4]
],

tileRules: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
],
}

const finalObject = {
    numAcross: 20,
    numDown: 20,

graphicMap: [

    [5, 5, 5, 0, 1, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3],
    [5, 0, 3, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 3],
    [5, 0, 3, 0, 1, 0, 1, 1, 0, 4, 0, 1, 1, 0, 5, 5, 5, 4, 0, 3],
    [4, 0, 1, 0, 4, 0, 1, 4, 0, 3, 1, 1, 0, 0, 0, 0, 0, 3, 0, 4],
    [5, 0, 0, 0, 4, 0, 4, 1, 0, 2, 0, 3, 4, 0, 5, 4, 5, 3, 0, 3],
    [3, 1, 1, 0, 1, 1, 4, 5, 0, 1, 0, 1, 3, 0, 0, 0, 1, 2, 0, 4],
    [2, 0, 1, 0, 5, 5, 4, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 4, 0, 4, 0, 1, 0, 1, 5],
    [5, 1, 5, 5, 4, 3, 0, 1, 0, 1, 0, 1, 5, 0, 3, 3, 1, 0, 3, 4],
    [5, 0, 0, 0, 0, 4, 0, 2, 0, 1, 0, 4, 5, 0, 2, 4, 0, 0, 0, 5],
    [5, 0, 0, 0, 0, 1, 0, 5, 0, 1, 0, 4, 5, 0, 4, 2, 0, 4, 0, 5],
    [5, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 4, 0, 0, 0, 0, 4, 0, 4],
    [5, 0, 2, 1, 4, 1, 0, 1, 0, 5, 5, 1, 4, 0, 1, 1, 0, 5, 0, 3],
    [5, 0, 4, 5, 0, 4, 0, 0, 0, 5, 0, 0, 4, 1, 1, 1, 0, 0, 0, 4],
    [4, 0, 3, 1, 0, 5, 5, 1, 0, 5, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
    [3, 0, 0, 1, 0, 1, 0, 0, 0, 4, 0, 3, 0, 0, 5, 0, 0, 0, 0, 4],
    [3, 1, 0, 5, 0, 0, 0, 0, 0, 1, 2, 3, 0, 3, 2, 0, 1, 0, 4, 1],
    [4, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 2, 1, 0, 1, 0, 4, 1],
    [4, 1, 0, 3, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 2],
    [5, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 3, 5, 4, 4, 4, 3, 0, 5, 2] 
    ],
    
tileRules: [
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
    ],


}

//Level storing
let levels = {
    beginning: beginningObject,
    middle: middleObject,
    final: finalObject,
}

let transitionBeginningToMiddle = {
    linkedLevel: levels.beginning,
    startingXPos: 2 * tileSize,
    startingYPos: 14 * tileSize
}

let transitionMiddleToBeginning = {
    linkedLevel: levels.middle,
    startingXPos: 19 * tileSize,
    startingYPos: 14 * tileSize
}

let transitionMiddleToFinal = {
    linkedLevel: levels.final,
    startingXPos: 17 * tileSize,
    startingYPos: 18 * tileSize
}

let transitionFinalToMiddle = {
    linkedLevel: levels.middle,
    startingXPos: 17 * tileSize,
    startingYPos: 1 * tileSize
}
