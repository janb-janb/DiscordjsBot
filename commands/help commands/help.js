const {MessageEmbed} = require('discord.js')

const Helpembed = new MessageEmbed()
.setTitle("List of Engine Commands")
.addFields(
  {name: `.help (.commands or .h) -`, value: `Command that lists you all bots commands!`, inline: true},
  {name: `.challenge-help -`, value: `Command that lists you all challenge commands!`, inline: false},
  {name: `.ping (.p) -`, value: `Shows latency between you and discord.`, inline: true}
)
.setColor(0x228ae6)
.setFooter("Bot is Still under Development!")

module.exports = {
  aliases: ['commands', 'h'], 
  callback: ({ message }) => {

message.reply(Helpembed)
  }
};