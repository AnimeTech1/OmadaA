// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002010101010201020202020202010101020202010102010201010101020101010101020101020102010101010201010101010201010201020202020102010101010102010102010101010201020101010102020102020202010102010202020101020101020101020101020101010201010201010201010201010201010102010202010102010102010102020202020201020101020101020101020101010201010202020201010201010201010102010101020101010102010102010101020101010201010101020101020101010201010102010101010202020201010102010202020101010102010101010101020102010101010101020101010101010301`, img`
. 2 2 2 2 . 2 . . . . . . 2 2 2 
. . . 2 2 . 2 . 2 2 2 2 . 2 2 2 
2 2 . 2 2 . 2 . 2 2 2 2 . 2 2 2 
2 2 . 2 2 . 2 . . . . 2 . 2 2 2 
2 2 . 2 2 . 2 2 2 2 . 2 . 2 2 2 
2 . . 2 . . . . 2 2 . 2 . . . 2 
2 . 2 2 . 2 2 . 2 2 . 2 2 2 . 2 
2 . 2 2 . 2 2 . 2 2 . 2 2 2 . 2 
. . 2 2 . 2 2 . 2 2 . . . . . . 
2 . 2 2 . 2 2 . 2 2 . 2 2 2 . 2 
2 . . . . 2 2 . 2 2 . 2 2 2 . 2 
2 2 . 2 2 2 2 . 2 2 . 2 2 2 . 2 
2 2 . 2 2 2 2 . 2 2 . 2 2 2 . 2 
2 2 . 2 2 2 2 . . . . 2 2 2 . 2 
. . . 2 2 2 2 . 2 2 2 2 2 2 . 2 
. 2 2 2 2 2 2 . 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
