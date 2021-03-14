module.exports = {
  aliases: ['p'],
    callback: ({ message }) => {
      var ping = Date.now() - message.createdTimestamp + " ms";
    message.reply("Pong! 🏓Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");

    }
  }