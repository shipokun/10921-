let tmepurature = 0
basic.forever(function on_forever() {
    
    tmepurature = input.temperature()
    if (tmepurature <= 10) {
        basic.showLeds(`
            . . # . .
                        . . . # .
                        . . . . #
                        . . # # .
                        . . # . .
        `)
    } else if (tmepurature <= 20) {
        basic.showLeds(`
            # . # . #
                        . . # . .
                        . # . # .
                        . . # . .
                        . . # . .
        `)
    } else {
        basic.showLeds(`
            . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
        `)
    }
    
})
