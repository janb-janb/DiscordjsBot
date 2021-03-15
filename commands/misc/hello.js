const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client


Client.on(“message”, () => {
    If(message.content == “hello”){
         message.reply(“Hello!”)
    }
}
