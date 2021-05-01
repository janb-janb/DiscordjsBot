module.exports = {
    category: 'Puzzles',
    description: 'Under developement',
    aliases: ['puzzle-1'],
    callback: ({ message }) => {
      message.channel.send('Find the best move for black. Please use .answer followed by your move.', {files:
    ["Puzzle1-1.png"]})
    }
  }