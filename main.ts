let mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . . 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b b e 4 4 4 4 e b b f . . 
    . . f b b b b b b b b b b f . . 
    . f b b e b b e e b b e b b f . 
    . f b b f f e e e e f f b b f . 
    . f b b f b f e e f b f b b f . 
    . f 9 9 e 1 f 4 4 f 1 e 9 9 f . 
    f f 9 9 f 4 4 4 4 4 4 f 9 9 f f 
    f 9 9 f f f e e e e f f f 9 9 f 
    . f e e f 9 1 1 1 1 9 f e e f . 
    . . e 4 6 1 1 1 1 1 1 6 4 e . . 
    . . e f 6 1 6 1 6 1 6 6 f e . . 
    . . . f f 1 9 1 9 1 9 f f . . . 
    . . . . . f f 6 6 f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
