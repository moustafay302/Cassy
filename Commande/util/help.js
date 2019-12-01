module.exports.run = async (bot,message,args,prefix,error,check)  =>{
  const Discord = require("discord.js")
  const fs = require('fs')
  const choice = args.join(" ").toLowerCase();
  const category = (category) => bot.commands.filter(command => command.help.category === category).map(command => command.help.name)
  if(args.join(' ')){
    var command = bot.commands.get(args.join(' '))|| bot.alias.get(args.join(' '))
    if(!command) return message.channel.send(`**${error}${message.author.username} , ** Commande introuvable.`)

    var embed = new Discord.RichEmbed()
    .addField(`:credit_card: Commande : `,command.help.name,true)
    .addField(`:dividers: Alias : `,!command.help.alias ? "Aucun":command.help.alias,true)
    .addField(`<:usage:501379562173890560> Usage :`,!command.help.usage ? "Aucun pour le moment ! (en dev)" : command.help.usage)
    .addField(`:anger_right: Description :`,!command.help.description ? "Aucun pour le moment ! (en dev)" : command.help.description)
    .setFooter(`${message.author.tag} • ${prefix}${this.help.name}`, message.author.displayAvatarURL)
    .setTimestamp()
    .setColor('0xff7b00')
    message.channel.send(embed)
    return
  }
  // ***:moneybag: Économie*** \`${category('economy').length}\`
  // ${category('economy').join(', ')}
  var embed = new Discord.RichEmbed()
  .setDescription(`

***🤗 Social*** \`${category('social').length}\`
${category('social').join(', ')}

***🔧 Utile*** \`${category('util').length}\`
${category('util').join(', ')}
`)
.setFooter(`${message.author.tag} • ${prefix}${this.help.name}`, message.author.displayAvatarURL)
//.setThumbnail(bot.user.displayAvatarURL)
.setTimestamp()
.setColor('0xff7b00')
message.channel.send(embed)

}

module.exports.help = {
  name: "help",
  alias:"h",
  category:"util"

}


/*

let number = 51
if(!args[0]) {
 `
<:red:491055111049707534> En Développement.
<:green:491055069270114305> Terminer.
<:blue:491055667730186251> Ajout de commandes ou bugs.
  `
var embed = new Discord.RichEmbed()

.setDescription(`
:page_with_curl: ___***Catégories disponibles:***___

**➢ ${prefix}help mod  •** Affiche le menu de **modération**.
**➢ ${prefix}help util •** Affiche le menu de commandes **utile**.
**➢ ${prefix}help fun •** Affiche le menu de commandes **fun**.
**➢ ${prefix}help social •** Affiche le menu de commandes **social**.
**➢ ${prefix}help image •** Affiche le menu de commandes **image**.

**<:terminal:491392424367620107> Nombres de commandes :** ${number}
***<:discord:491051236397678592> Serveur support : [discord.gg/support](https://discord.me/michelsupport)
<:invite:491051734001647647> Lien d'invitation : [invite/bot/Michel](https://discordapp.com/oauth2/authorize?client_id=485892170658742282&scope=bot&permissions=-1)***

`)
.setFooter(message.author.tag+` • ${prefix}help `,message.author.displayAvatarURL)
.setThumbnail('https://cdn.discordapp.com/attachments/462567192303501332/463410035314130966/unknown.png')
.setTimestamp()
try{
  embed.setColor(message.member.hoistRole.color)
  }catch(err){

  }
return message.channel.send(embed)
}
if (choice !== "fun" && choice !== "mod" && choice !== "social"&&choice!=="util"&&choice!=="all"&&choice!=="image") return message.channel.send(`**${error} ${message.author.username} ,** Catégorie introuvable ou en development .`);

if(choice=="mod") {
  var mod =[]
  fs.readdir('./Commande/mod', (err, files) => {let c1 = files.filter(f=> f.split('.').pop() === "js");c1.forEach(f =>{const props = require(`../../Commande/mod/${f}`).help ;
  mod.push(`**${prefix}${props.name}  •** ${!props.description?"Aucune description.":props.description} `)})
  var embedMod = new Discord.RichEmbed()
  .setDescription(`
  :tools: ___***« Modération »***___

  ${mod.join('\n')}

  **<:terminal:491392424367620107> Nombres de commandes :** ${mod.length}
  `)
  .setFooter(`${message.author.tag} • ${prefix}help mod`,message.author.displayAvatarURL)
  .setColor("#c91010")
  .setThumbnail('https://cdn.discordapp.com/attachments/462567192303501332/463411694987771904/unknown.png')
  .setTimestamp()

 message.channel.send(embedMod)
})
}

if(choice=="fun") {
  var fun =[]
  fs.readdir('./Commande/fun', (err, files) => {let c2 = files.filter(f=> f.split('.').pop() === "js");c2.forEach(f =>{const props = require(`../../Commande/fun/${f}`).help;fun.push(`**${prefix}${props.name}  •** ${!props.description?"Aucune description.":props.description} `)})

  var embedFun = new Discord.RichEmbed()
  .setDescription(`
  :tada: ___***« Amusement »***___

  ${fun.join('\n')}

  **<:terminal:491392424367620107> Nombres de commandes :** ${fun.length}
  `)
  .setFooter(message.author.tag+` • ${prefix}help fun`,message.author.displayAvatarURL)
  .setColor("#c91010")
  .setThumbnail('https://cdn.discordapp.com/attachments/464439315674431498/464641130839932939/unknown.png')
  .setTimestamp()
 message.channel.send(embedFun)
})

}
if(choice=="social") {
  var social =[]
  fs.readdir('./Commande/social', (err, files) => {let c2 = files.filter(f=> f.split('.').pop() === "js");c2.forEach(f =>{const props = require(`../../Commande/social/${f}`).help;social.push(`**${prefix}${props.name}  •** ${!props.description?"Aucune description.":props.description} `)})

  var embedSocial = new Discord.RichEmbed()
.setDescription(`
:busts_in_silhouette: ___***« Social »***___

${social.join('\n')}

**<:terminal:491392424367620107> Nombres de commandes :** ${social.length}

`)
.setFooter(`${message.author.tag} • ${prefix}help social`,message.author.displayAvatarURL)
.setColor("#c91010")
.setThumbnail('https://cdn.discordapp.com/attachments/464652337944723466/464655309395197962/unknown.png')
.setTimestamp()
 message.channel.send(embedSocial)
})
}
if(choice=="util") {
  var util =[]
  fs.readdir('./Commande/util/', (err, files) => {let c2 = files.filter(f=> f.split('.').pop() === "js");c2.forEach(f =>{const props = require(`../../Commande/util/${f}`).help;util.push(`**${prefix}${props.name}  •** ${!props.description?"Aucune description.":props.description} `)})

  var embedUtil = new Discord.RichEmbed()
  .setDescription(`
  :wrench:  ___***« Utile »***___

  ${util.join('\n')}

  **<:terminal:491392424367620107> Nombres de commandes :** ${util.length}
`)
  .setFooter(message.author.tag+` • ${prefix}help util`,message.author.displayAvatarURL)
  .setColor("#c91010")
  .setThumbnail('https://cdn.discordapp.com/attachments/464652337944723466/464833608788738081/unknown.png')
  .setTimestamp()
   message.channel.send(embedUtil)
})
}
if(choice=="image") {
  var image =[]
  fs.readdir('./Commande/image/', (err, files) => {let c2 = files.filter(f=> f.split('.').pop() === "js");c2.forEach(f =>{const props = require(`../../Commande/image/${f}`).help;image.push(`**${prefix}${props.name}  •** ${!props.description?"Aucune description.":props.description} `)})

  var embedUtil = new Discord.RichEmbed()
  .setDescription(`
  <:photo:491573216620314626>  ___***« Image »***___

  ${image.join('\n')}

  **<:terminal:491392424367620107> Nombres de commandes :** ${image.length}

`)
  .setFooter(message.author.tag+` • ${prefix}help image`,message.author.displayAvatarURL)
  .setColor("#c91010")
  .setThumbnail('https://cdn.discordapp.com/attachments/464652337944723466/464833608788738081/unknown.png')
  .setTimestamp()
   message.channel.send(embedUtil)
})
}
if(choice=="all") {
  var embed = new Discord.RichEmbed()
.setDescription(`
:page_with_curl: ___***Catégories disponibles:***___

🛠     Affiche le menu de **modération** .
🔧     Affiche le menu de commandes **utile** .
🎉   Affiche le menu de commandes **fun** .`)
.setFooter(message.author.tag+` • ${prefix}help `,message.author.displayAvatarURL)
.setColor("#c91010")
.setThumbnail('https://cdn.discordapp.com/attachments/462567192303501332/463410035314130966/unknown.png')
.setTimestamp()

const help = await message.channel.send(embed)
 await help.react('🛠')
 await help.react('🔧')
 await help.react('🎉')

const data_res = help.createReactionCollector((reaction, user) => user.id == message.author.id);

data_res.on('collect', async reaction => {
  if(reaction.emoji.name=="🛠"){
    var mod =[]
    fs.readdir('./Commande/mod', (err, files) => {let c1 = files.filter(f=> f.split('.').pop() === "js");c1.forEach(f =>{const props = require(`../../Commande/mod/${f}`).help
    mod.push(`**${prefix}${props.name}  •** ${!props.description?"Aucune description.":props.description} `)})
    var embedMod = new Discord.RichEmbed()
    .setDescription(`
    :tools: ___***« Modération »***___

    ${mod.join('\n')}
    `)
    .setFooter(`${message.author.tag} • ${prefix}help mod`,message.author.displayAvatarURL)
    .setColor("#c91010")
    .setThumbnail('https://cdn.discordapp.com/attachments/462567192303501332/463411694987771904/unknown.png')
    .setTimestamp()
 help.edit(embedMod)
 mod=[]
  })
  }

  if(reaction.emoji.name=="🔧"){
    var util =[]
    fs.readdir('./Commande/util/', (err, files) => {let c2 = files.filter(f=> f.split('.').pop() === "js");c2.forEach(f =>{const props = require(`../../Commande/util/${f}`).help;util.push(`**${prefix}${props.name}  •** ${!props.description?"Aucune description.":props.description} `)})

    var embedUTIL = new Discord.RichEmbed()
    .setDescription(`
    :wrench:  ___***« Utile »***___

    ${util.join('\n')}
  `)
    .setFooter(message.author.tag+` • ${prefix}help util`,message.author.displayAvatarURL)
    .setColor("#c91010")
    .setThumbnail('https://cdn.discordapp.com/attachments/464652337944723466/464833608788738081/unknown.png')
    .setTimestamp()
     help.edit(embedUTIL)
     util=[]
  })
  }

  if(reaction.emoji.name=="🎉"){
    var fun =[]
    fs.readdir('./Commande/fun', (err, files) => {let c2 = files.filter(f=> f.split('.').pop() === "js");c2.forEach(f =>{const props = require(`../../Commande/fun/${f}`).help;fun.push(`**${prefix}${props.name}  •** ${!props.description?"Aucune description.":props.description} `)})

    var embedFun = new Discord.RichEmbed()
    .setDescription(`
    :tada: ___***« Amusement »***___

    ${fun.join('\n')}
    `)
    .setFooter(message.author.tag+` • ${prefix}help fun`,message.author.displayAvatarURL)
    .setColor("#c91010")
    .setThumbnail('https://cdn.discordapp.com/attachments/464439315674431498/464641130839932939/unknown.png')
    .setTimestamp()
   help.edit(embedFun)
   fun = []
  })
  }
  await reaction.remove(message.author.id);
})

}*/
