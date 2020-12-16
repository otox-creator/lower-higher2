let freq = 0
let lastnote = 0
let note = 60
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        lastnote = note
        note = lastnote + 1
        freq = 440 * 2 ** ((note - 49) / 12)
        music.playTone(freq, music.beat(BeatFraction.Sixteenth))
    } else if (input.buttonIsPressed(Button.B)) {
        lastnote = note
        note = lastnote - 1
        freq = 440 * 2 ** ((note - 49) / 12)
        music.playTone(freq, music.beat(BeatFraction.Sixteenth))
    } else {
        control.waitMicros(1)
    }
    
})
