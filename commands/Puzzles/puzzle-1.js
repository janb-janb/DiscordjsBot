const { MessageEmbed } =  require('discord.js')
const { MessageAttachment } = require('discord.js')
const embed = new MessageEmbed({
  title: 'Puzzle #1! White to move and mate in 3!'
})
const NewPuzzle = new PuzzleEmbed(embed)
const Puzzleattachment = new MessageAttachment('https://cdn.discordapp.com/attachments/800754062080868382/829400033337409556/unknown.png')
  
.addFields(
  { value: 'White to move and checkmate in 3! Good Luck!'},
)

.setImage(Puzzleattachment)

const init NewPuzzleFn: DiscordPromptFunction<AgeMenuData> = async (message: Message, data: AgeMenuData) => {
  const { content } = message
  if (content === 'Bg2') {
    message.reply('Correct go on!')
    
  } else {
    message.reply('Incorrect! Try again!')

  }
  return data
}
 
