const { default: messageHandler } = require("wokcommands/dist/message-handler")

module.exports = client => {
    let channelId = '856251143433093132'



    client.on('guildMemberAdd', (member) => {
        console.log(member)
        const message = `🎉🎉Welcome <@${
            member.id
          }> to the server 🎉🎉! Make sure to verify yourself in <#784110209823932456> and get some roles from <#772118882243706920>, after that go into the <#615478996951498754> and have some fun chating and learning! We hope you will enjoy your stay!`

        let channel = member.guild.channels.cache.get(channelId)
        channel.send(message)


    })
}
