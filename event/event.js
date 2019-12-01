module.exports.run = async(bot) => {
  const reqEvent  = (event) => require(`./${event}`)
  bot.on('ready',async()=>{reqEvent('ready')(bot)})
  bot.on('reconnecting',async(err)=>console.log(`J'essaye de me reconnecter ! ${err}`))
  bot.on('warn',(err)=>console.log(`Avertissement : ${err}`))
  bot.on('error',async(err) => console.log(`Une erreur c'est produite`))
  
  bot.on('guildMemberAdd',async member =>reqEvent('guildMemberAdd')(bot,member))
  bot.on('guildMemberRemove',async member =>reqEvent('guildMemberRemove')(bot,member))

  bot.on('message', async message => {
    var args = message.content.split(' ').slice(1)
    reqEvent('message')(bot,message,args)
  })
  //bot.on('message', async message =>reqEvent('functions')(bot,message))

  bot.on('messageUpdate',async (oldMeesage,newMessage) => reqEvent('messageUpdate'))


}
