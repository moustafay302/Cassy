const Discord   = require(`discord.js`)
const config    = require('./config.json')
const fs        = require(`fs`)
const color     = require(`chalk`)
const bot       = new Discord.Client({autoReconnect:true,max_message_cache:100000000000})

bot.commands    = new Discord.Collection()
bot.alias       = new Discord.Collection()
bot.queue       = new Map()
bot.cooldown    = new Set()

require('./event/event').run(bot)

bot.commandsRun = function commandsRun(message){

  if(message.author.bot) return
  if(message.channel.type == "dm") return
  if(!message.guild.member(bot.user).hasPermission("SEND_MESSAGES"))return
  var prefix = config.prefix
  var args   = message.content.split(" ").slice(1)
  if (message.content===`<@${bot.user.id}>`||message.content===`<@!${bot.user.id}>`)message.channel.send(`Mon prefix est **\`${prefix} \`** dans ce serveur faite **\`${prefix}help\`** pour voir mes commandes:smile:`)
  if (!message.content.toLowerCase().startsWith(prefix) || !message.content.startsWith(''))return
  var cmd = message.content.toLowerCase().split(" ")[0].slice(prefix.length)
  var commandfile =  bot.commands.get(cmd) || bot.alias.get(cmd)

    if(commandfile) commandfile.run(bot,message,args,prefix).catch(er=>console.error(er))
  }


let number = 0
fs.readdir("./Commande/",(err, folders) => {
  if(err) console.log(err) ;
  folders.forEach(folder=>{
    fs.readdir(`./Commande/${folder}`,(err, files) => {
      console.log(color.blue(`~~ ${folder} ~~`))
      const jsfile = files.filter(f => f.split(".").pop() == "js"||"")
      jsfile.forEach(file=>{
        console.log(color.green(color.magenta(`[${++number}]`)+`${file} a bien été chargée ! `))
        const props = require(`./Commande/${folder}/${file}`)
        bot.commands.set(props.help.name , props);
        if(!props.help.alias)return
        bot.alias.set(props.help.alias, props)
      })
    })
  })
})
bot.login(config.token)
