module.exports = {
    category: 'Challenge Commands',
    description: 'Command that Challenges role for a game of rapid!',
    aliases: ['chllng-rapid'], // Optional
    callback: ({ message }) => {
      message.reply('You have successfully challenged <@&773540115195756566> to a game of rapid chess!')
    }
  }