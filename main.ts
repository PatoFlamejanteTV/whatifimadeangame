namespace SpriteKind {
    export const BACKGROUND = SpriteKind.create()
    export const FRUIT = SpriteKind.create()
}
let MAIN_BG = sprites.create(assets.image`CHECKERBOARD`, SpriteKind.BACKGROUND)
MAIN_BG.setScale(10, ScaleAnchor.Middle)
let PLR = sprites.create(assets.image`MAIN`, SpriteKind.Player)
PLR.setScale(2, ScaleAnchor.Middle)
controller.moveSprite(PLR, 100, 100)
let FRUIT2 = sprites.create(assets.image`APPLE`, SpriteKind.FRUIT)
forever(function () {
    FRUIT2.setPosition(randint(-10, 10), randint(-10, 10))
    pauseUntil(() => FRUIT2.x == PLR.x && FRUIT2.y == PLR.y)
})
