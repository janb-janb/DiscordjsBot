const { MessageAttachment } = require('discord.js')
const WOKCommands = require('wokcommands')


module.exports = {
    callback: ({ message }) => {

        const Puzzleattachment = new MessageAttachment('https://cdn.discordapp.com/attachments/668459390533107732/829388290049310740/unknown.png')
        
        message.channel.send(`🎯New Puzzle! Checkmate in 3!
        <hint> for solution`, Puzzleattachment)

        const Solution1Attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/800754062080868382/829396781288390707/unknown.png')

        if (message.content.startsWith('Bg2')) {
            message.reply(`✅Correct!
            Go on!`, Solution1Attachment )

        }

    

    }

  }