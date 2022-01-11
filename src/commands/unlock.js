const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`você não tem permisão para executar esse comando.`)

    message.channel.overwritePermissions([{
        id: message.guild.id,
        accept: ['SEND_MESSAGES'],
    }]);

    let unlock = new Discord.MessageEmbed()
    .setColor("#32CD32")
    .setDescription(`🔓 ${message.author} canal desbloqueado com sucesso.`)
    .setFooter(`use sn!lock para travar esse canal.`)

    message.channel.send(unlock)

}