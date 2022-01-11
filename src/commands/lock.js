const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`você não tem permisão para executar esse comando.`)

    message.channel.overwritePermissions([{
        id: message.guild.id,
        deny: ['SEND_MESSAGES'],
    }]);

    let lock = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`🔒 ${message.author} canal bloqueado com sucesso `)
    .setFooter(`use sn!unlock para destravar esse canal.`)

    message.channel.send(lock)

}