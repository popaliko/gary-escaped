info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.bubbles, 500)
    game.gameOver(false)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Annaannaasss`)
mySprite = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . c 2 2 c 6 c 2 2 c 3 3 3 3 3 c 
    . f f 2 c 6 c 2 f f 3 3 3 3 3 c 
    . f f 2 c 6 c 2 f f 6 3 3 3 c c 
    . c 2 2 3 c 3 2 2 c 6 6 6 6 c c 
    . . c 2 2 3 2 2 c 3 3 3 3 3 3 c 
    . c c 2 2 2 2 2 b c c 3 3 3 3 c 
    c 2 2 4 2 2 2 4 b 2 2 c 3 3 c . 
    b 2 4 b 4 4 4 4 b b 2 c b b . . 
    c 4 2 2 b 4 b 2 2 2 2 c 2 2 b . 
    c 2 2 2 c 4 c 2 2 2 c 2 c 2 c . 
    c 2 2 2 2 c 2 2 2 2 c 2 c 2 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 1 3 1 3 . . . . . . 
    . . . . 3 3 f 3 f 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 b b b 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 b 3 3 3 3 3 3 3 b 3 3 . . 
    . 3 3 b 3 3 3 b 3 3 3 b 3 3 . . 
    . . . . a 7 7 a 7 a 7 . . . . . 
    . . . . 7 a 7 7 7 7 7 . . . . . 
    . . . . . 7 7 . 7 a . . . . . . 
    . . . . . 3 3 . 3 3 . . . . . . 
    `, SpriteKind.Enemy)
let myEnemy2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . c . . . . . . . . . c . . . . 
    . . c . . . . . . . c . . . . . 
    . . . c . . . . . c . . . . . . 
    . . . . c b b b c . . . . . . . 
    . . . . b b d b b . . . . . . . 
    . . b . b b 2 b b . b . . . . . 
    . . b b b b b b b b b . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . . b . b . . . . . . . . 
    . . . . . b . b . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let myEnemy3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . d . . d . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . d 2 2 d . . . . . . . 
    . . 2 . . 2 2 2 2 . . 2 . . . . 
    . 2 2 . 9 2 2 2 2 9 . 2 2 . . . 
    . . 2 2 9 2 2 2 2 9 2 2 . . . . 
    . . . 2 9 9 9 9 9 9 2 . . . . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(15, 10)
mySprite.setStayInScreen(true)
myEnemy.follow(mySprite, 80)
myEnemy.setPosition(130, 9)
myEnemy2.follow(mySprite, 60)
myEnemy2.setPosition(130, 96)
myEnemy3.follow(mySprite, 30)
myEnemy3.setPosition(19, 100)
info.startCountdown(20)
