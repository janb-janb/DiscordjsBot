const { default: messageHandler } = require("wokcommands/dist/message-handler")

module.exports = client => {
    const channelId = '856251143433093132'



    client.on('guildMemberAdd', (member) => {
        console.log(member)

        const message = `Please welcome <@${
            member.id
          }> to the server!`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)

    })
}
