const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

module.exports = {
      callback: ({ message, args }) => {

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions")
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (!User) return message.channel.send("Invalid User")
        if (User.hasPermission("KICK_MEMBERS")) return message.reply("Invalid Permissions")
        let kickReason = args.join(" ").slice(22);
        if (!kickReason) {
          kickReason = "None"
        }
        
        User.kick({reason: kickReason})
        message.reply('You succesfully kicked that user!')

      }
    }