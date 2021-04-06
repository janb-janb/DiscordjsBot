const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

module.exports = {
      callback: ({ message }) => {

        if (msg.guild.member(user).hasPermission('ADMINISTRATOR')) return msg.reply('I can not kick this user, he has higher permission than I do.')
        if (!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.reply('I need the permission `KICK_MEMBERS` for this to work.')
        
        msg.guild.member(user).kick()
        msg.say('Mentioned user has been successfully kicked!' )
    }
}