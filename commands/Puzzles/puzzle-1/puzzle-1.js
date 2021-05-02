var answer = false;
module.exports = {
    category: 'Puzzles',
    description: 'Under developement',
    aliases: ['puzzle-1'],
    callback: ({ message }) => {
      message.channel.send('Find the best move for black. Please use .ans followed by your move. https://imgur.com/hjxGZ4H');
     var answer = true;
      }
    }