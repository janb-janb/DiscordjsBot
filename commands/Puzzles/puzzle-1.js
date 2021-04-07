const { MessageAttachment } = require('discord.js')
const WOKCommands = require('wokcommands')


module.exports = {
    callback: ({ message }) => {

        const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/668459390533107732/829388290049310740/unknown.png')
        
        message.channel.send(`🎯New Puzzle! Checkmate in 3!
        <hint> for solution`, attachment)

    }
  }