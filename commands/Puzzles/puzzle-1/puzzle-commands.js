var puzzleNumbers = [1]; //add more numbers as more puzzles are added
const puzzleRandomizer = array[Math.floor(Math.random() * puzzleNumbers.length)];
module.exports = {
    category: 'Puzzles',
    description: 'Under developement',
    aliases: ['puzzle'],
    callback: ({ message }) => {
      message.channel.send('Please use .answer followed by your move.', {files:
    ["puzzle" + puzzleRandomizer + "-1.png"]})
    }
  }