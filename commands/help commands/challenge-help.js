const {MessageEmbed} = require('discord.js')

const ChallengeHelpembed = new MessageEmbed()
.setTitle('List of Challenge commands!')
        .setThumbnail('https://i.imgur.com/8EiRvON.png')
        .addFields(
            { name: '.challenge-bullet -', value: 'Pings our Challenger Troop role and asks for a game of bullet chess!'},
            { name: '.challenge-blitz -', value: 'Pings our Challenger Troop role and asks for a game of blitz chess!'},
            { name: '.challenge-rapid -', value: 'Pings our Challenger Troop role and asks for a game of rapid chess!'},
            { name: '.challenge-classical -', value: 'Pings our Challenger Troop role and asks for a game of classical chess chess!'},
            { name: '.challenge-correspondence -', value: 'Pings our Challenger Troop role and asks for a game of correspondence chess!'}
        )

        
            .setColor(15158332)
            .setFooter(`NOTE: If you don't want to run commands you can ping our Challenger Troop and it will work. :)`)

module.exports = {
  category: 'Help Commands',
  description: 'Command that lists all bots challenge commands!',
  aliases: ['chllng-cmds'], 
  callback: ({ message }) => {

message.reply(ChallengeHelpembed)
  }
};