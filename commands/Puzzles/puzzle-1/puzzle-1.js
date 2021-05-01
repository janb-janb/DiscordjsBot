module.exports = {
    category: 'Puzzles',
    description: 'Under developement',
    aliases: ['puzzle-1'],
    callback: ({ message }) => {
      message.channel.send('Find the best move for black. Please use .ans followed by your move. https://imgur.com/hjxGZ4H')
    }
  }
  module.exports = {
    category: 'Puzzles',
    description: 'Under developement',
    aliases: ['ans-Bd1', 'ans-Bxd1', 'ans-bd1', 'ans-bxd1', ],
    callback: ({ message }) => {
      message.channel.send('Great! 1. Ree1 Bxd1 2. Rxd1. Please use .ans followed by your move. https://imgur.com/nnXNCwT')
    }
  }
