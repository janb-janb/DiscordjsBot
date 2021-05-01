module.exports = {
    category: 'Puzzles',
    description: 'Under developement',
    aliases: ['puzzle-1'],
    callback: ({ message }) => {
      var attachment = new Discord.MessageAttachment('puzzle1-1.png');
      message.channel.send('Find the best move for black. Please use .answer followed by your move.' + attachment)
    }
  }