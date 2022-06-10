// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000e0e01010101010101010101010101040e07060706070605070607060706050c0e05050505050505050505050505050c0305050505050706070605050505050c0305090505050505050505050505050c0c0d0b0b0b0b0c05050505050505050c0c05050505050c05050505050508090c0c050e0e05050c05050505050505050c0c050e0e0b0b0b0b0b0b0b0b0b0c050c0c050e0e0505050505050505050c0d0c0c05050505050505050c0b0d0d0d05020c05050505050505050a0505050505020c05050505050505050a0505050505020c08090505050505050a0505050505020c05050505050505050a0505050505020c0e0e0e0e0e0e0e0e0a0e0e0e0e0e0e`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedWest,sprites.dungeon.doorLockedWest,sprites.dungeon.doorLockedEast,sprites.dungeon.stairNorth,sprites.dungeon.stairEast,sprites.dungeon.stairSouth,sprites.dungeon.stairWest,sprites.dungeon.hazardLava1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
