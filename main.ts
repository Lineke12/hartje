basic.forever(function () {
    for (let index = 0; index < 100; index++) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
        }
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
