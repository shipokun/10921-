tmepurature = 0

def on_forever():
    global tmepurature
    tmepurature = input.temperature()
    if tmepurature <= 10:
        basic.show_leds("""
            . . # . .
                        . . . # .
                        . . . . #
                        . . # # .
                        . . # . .
        """)
    elif tmepurature <= 20:
        basic.show_leds("""
            # . # . #
                        . . # . .
                        . # . # .
                        . . # . .
                        . . # . .
        """)
    else:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
basic.forever(on_forever)
