freq = 0
lastnote = 0
note = 60

def on_forever():
    global lastnote, note, freq
    if input.button_is_pressed(Button.A):
        lastnote = note
        note = lastnote + 1
        freq = 440 * 2 ** ((note - 49) / 12)
        music.play_tone(freq, music.beat(BeatFraction.SIXTEENTH))
    elif input.button_is_pressed(Button.B):
        lastnote = note
        note = lastnote - 1
        freq = 440 * 2 ** ((note - 49) / 12)
        music.play_tone(freq, music.beat(BeatFraction.SIXTEENTH))
    else:
        control.wait_micros(1)
basic.forever(on_forever)