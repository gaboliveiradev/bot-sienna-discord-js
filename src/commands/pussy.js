const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    if (!message.channel.nsfw) return message.reply(`você só pode executar esse comandos em canais +18.`)

  const lewdembed = new Discord.MessageEmbed()
  .setDescription(`${message.author} Yamate Kudasaiiiiiiiii`)
  .setImage("https://imgur.com/MocN7rU.gif")
  .setColor(`#000000`)

  message.channel.send(lewdembed);

}