module.exports = {
    category: 'Challenge Commands',
    description: 'Command that Challenges role for a game of bullet!',
    aliases: ['chllng-bullet'], // Optional
    callback: ({ message }) => {
      message.channel.send('You have successfully challenged <@&773540115195756566> to a game of bullet chess!')
    }
  }