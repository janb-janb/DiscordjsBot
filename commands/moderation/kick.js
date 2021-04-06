const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

module.exports = {
      callback: ({ message }) => {

        if (message.guild.member(user).hasPermission('ADMINISTRATOR')) return message.reply('I can not kick this user, he has higher permission than I do.')
        if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply('I need the permission `KICK_MEMBERS` for this to work.')
        
        message.guild.member(user).kick()
        msessage.channel.send('Mentioned user has been successfully kicked!' )
    }
}