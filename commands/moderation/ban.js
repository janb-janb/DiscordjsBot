const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

module.exports = {
      callback: ({ message, args }) => {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
        let User = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0])
        if (!User) return message.channel.send("Please specify someone to ban!")
        if (User.hasPermission("BAN_MEMBERS")) return message.reply("Invalid Permissions")
        let banReason = args.join(" ").slice(22);
        if (!banReason) {
          kickReason = "None"
        }
        
        User.ban({reason: banReason})

      }
    }