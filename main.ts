enum RadioMessage {
    message1 = 49434
}
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 25, function (status) {
    music.playMelody("F A F A F A - - ", 250)
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    game.over(false)
})
controller.combos.attachSpecialCode(function () {
    statusbar3.value += -10
})
let statusbar3: StatusBarSprite = null
let mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`100010000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010c010101010101010101010101010105020601010101010101010101010101010304060101010101010101010101010503020406010101010101010101010105040708020101010101010101010101010a020904010101010101010101010101010a030b010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
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
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath8], TileScale.Sixteen))
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
let statusbar2 = statusbars.create(5, 4, StatusBarKind.Energy)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.attachToSprite(mySprite)
statusbar2.attachToSprite(mySprite)
statusbar2.setOffsetPadding(-12.5, 0)
statusbar.setOffsetPadding(-2, 0)
statusbar2.max = 20
scene.cameraFollowSprite(mySprite)
let myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
myEnemy.setPosition(28, 21)
myEnemy.follow(mySprite, 50)
music.playMelody("C E F C5 G B C5 - ", 600)
statusbar3 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar3.attachToSprite(myEnemy)
forever(function () {
    while (controller.anyButton.isPressed()) {
        pause(5000)
        statusbar2.value += -1
    }
})
forever(function () {
    pause(500)
    while (mySprite.overlapsWith(myEnemy)) {
        pause(500)
        statusbar.value += -10
        statusbar2.value += -1
    }
})
forever(function () {
    pause(1000)
    statusbar.value += 1
})
