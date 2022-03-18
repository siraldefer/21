basic.forever(function () {
    if (input.soundLevel() < 181) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
