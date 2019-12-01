const Discord   = require(`discord.js`)
const {prefix,ownerID,version}    = require('../config.json')
const figlet    = require('figlet')
const color     = require('chalk')
module.exports = async(bot)=>{
  var owner       = bot.users.get(ownerID)

  figlet.text(bot.user.username, {
      horizontalLayout: 'default',
      verticalLayout: 'default'
  }, (err, data)=> {
      console.log(color.red(data+color.red.underline.bold(`\n  est en ligne sur ${bot.guilds.size} serveurs\n\n`)))
  });
  var games= [
    `${bot.user.username} -> ${prefix}help 👋`,
    `${prefix}help | ${version}`,
    `${prefix}help | By ${owner.username} | ${version}`,
    `${prefix}help | ${bot.guilds.size} serveurs | ${bot.users.size} membres`
  ]

  setInterval(()=>{
    bot.user.setPresence({game: {
        name: (games[Math.floor(Math.random()*games.length)]),
        type: 'STREAMING',
        url: "https://www.twitch.tv/bot"
      }
    });
  },15000)
}
