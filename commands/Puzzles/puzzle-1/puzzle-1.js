const { MessageAttachment } = require('discord.js');
module.exports = {
    category: 'Puzzles',
    description: 'Under developement',
    aliases: ['puzzle-1'],
    callback: ({ message }) => {
      var attachment = new MessageAttachment("https://imgur.com/a/DqAb7JF");
      message.channel.send('Find the best move for black. Please use .answer followed by your move.', attachment)
    }
  }
