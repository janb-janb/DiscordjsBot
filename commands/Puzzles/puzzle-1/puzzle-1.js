const { MessageAttachment } = require('discord.js');
module.exports = {
    category: 'Puzzles',
    description: 'Under developement',
    aliases: ['puzzle-1'],
    callback: ({ message }) => {
      var attachment = new MessageAttachment("puzzle1-1.png");
      message.channel.send('Find the best move for black. Please use .answer followed by your move.' + attachment)
    }
  }