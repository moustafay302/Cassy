module.exports.run = async (bot,message,args,prefix,error,check)  =>{
const Discord = require("discord.js")
var{ get} =require('snekfetch')
var hug = await get('https://nekos.life/api/v2/img/hug')


  const user = message.mentions.users.first()


        if (!message.mentions.users.first()){
          var hug = await get('https://nekos.life/api/v2/img/hug')
          var embed = new Discord.RichEmbed()
          .setDescription(`**🤗 • @${message.author.username} ,** vous avez reçu un câlin de **@${bot.user.username}**`)
          .setImage(hug.body.url)
          .setFooter(`${message.author.tag} • ${prefix}hug`,message.author.displayAvatarURL)
          .setTimestamp()
          .setColor('0xff7b00')
          message.channel.send(embed)

        }else {

        get('https://nekos.life/api/v2/img/hug').then(hug=>{
                 var embed = new Discord.RichEmbed()
                 .setDescription(`**🤗 • @${message.mentions.users.first().username} ,** vous avez reçu un câlin de **@${message.author.username}**`)
                 .setImage(hug.body.url)
                 .setFooter(`${message.author.tag} • ${prefix}hug`,message.author.displayAvatarURL)
                 .setTimestamp()
                 .setColor('0xff7b00')
                 message.channel.send(embed)

      })
    }
}

module.exports.help = {
  name: "hug",
  alias:"calin",
  desscription: "Faire un calin.",
  usage: "hug\nhug <Utilisateur",
  category:"social"
}
