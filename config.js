module.exports = {
    app: {
        px: '-',
        token: 'OTYyNzQyOTAwNjU4MTUxNDk1.YlL-Mg.2mcOBymMtoADxIzbl03MuqVxi1o',
        playing: 'De Serneels'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};