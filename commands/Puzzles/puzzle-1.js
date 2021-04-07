const { MessageAttachment } = require('discord.js')
const WOKCommands = require('wokcommands')

const Puzzleattachment = new MessageAttachment('https://cdn.discordapp.com/attachments/800754062080868382/829400033337409556/unknown.png')
const PuzzleSolution = async () => {
    await this.channel.send(`🎯New Puzzle! Checkmate in 3!
    <hint> for solution`, Puzzleattachment)
    .then(async message => {
        await this.channel.awaitMessages(message => message.author.id === this.owner && !isNaN(('Bg2')), { time: 300 })
        .then(collected => {
            this.channel.send(`Correct! Go on!`);
        })
        .catch(collected => {
            this.channel.send(`You didn't answer puzzle on time, Good Luck next time!`);
    })
})
}