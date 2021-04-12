let mySprite = sprites.create(img`
    777777777777........
    .7777777777777......
    ..77777777777777....
    ..7777777777777777..
    ..777ffffffffff777..
    ..7ffccccccccccff7..
    ..7fccccccccccccf7..
    ..7fccccccccccccf77.
    ..7fccccccccccccf77.
    .77fddddddddddddf77.
    .77fddddd3ddddddf77.
    ..7fddddddddddddf77.
    ..777777dddd7777777.
    ...777777dd77.7777..
    .......777777.......
    .....7777777777.....
    ...77777777777777...
    ..77777777777777777.
    .777777777777777777.
    .777777777777777777.
    .77..77777777777.77.
    .77...777777777..77.
    .dd...777777777.ddd.
    ddd...777777777ddddd
    .ddd.77777.7777.d.d.
    d.d..77777..777.....
    ...77dddd7.7ddd77...
    ...7777777.7777777..
    ...7777777.7777777..
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 509, 509)
tiles.setTilemap(tilemap`level1`)
