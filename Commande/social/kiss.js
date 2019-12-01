module.exports.run = async (bot,message,args,prefix,error,check)  =>{
const Discord= require('discord.js')
var{ get} =require('snekfetch')


        if (!message.mentions.users.first()){
          get('https://nekos.life/api/v2/img/kiss').then(hug=>{
          var embed = new Discord.RichEmbed()
          .setDescription(`**😘 • @${message.author.username} ,** vous avez reçu un bisou de **@${bot.user.username}**`)
          .setImage(hug.body.url)
          .setFooter(`${message.author.tag} • ${prefix}kiss`,message.author.displayAvatarURL)
          .setTimestamp()
          .setColor('0xff7b00')
          message.channel.send(embed)
        })
        }else {

        get('https://nekos.life/api/v2/img/kiss').then(hug=>{
                 var embed = new Discord.RichEmbed()
                 .setDescription(`**😘 • @${message.mentions.users.first().username} ,** vous avez reçu un bisou de **@${message.author.username} **`)
                 .setImage(hug.body.url)
                 .setFooter(`${message.author.tag} • ${prefix}kiss`,message.author.displayAvatarURL)
                 .setTimestamp()
                 .setColor('0xff7b00')
                 message.channel.send(embed)

      })
    }
}

module.exports.help = {
  name: "kiss",
  alias:"bisou",
  description: "Faire un bisous.",
  usage: "kiss\nkiss <Utilisateur>",
  category:"social"

}
