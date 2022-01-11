const Discord = require("discord.js");

exports.run = async function(client, message, args, database) {

    const sexyrate = Math.floor(Math.random() * 100)

    const embed = new Discord.MessageEmbed()
    .setColor("#DC143C")
    .addField(":heart_decoration: Sexy Rate", "Eu te considero " + sexyrate + " de 100 na escala sexy")
    .setThumbnail(message.author.displayAvatarURL)

    message.channel.send(embed)
} 