const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  let whitelist = false;
  if(message.author.id == "784626179651010611") {
      whitelist = true

      try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        let sucesso = new Discord.MessageEmbed()
          .setColor('#36393F')
          .setDescription(`**Comando recarregado com sucesso \` sn!${args[0]} \`**`)
          .setTimestamp()
        message.channel.send(sucesso);
      } catch (err) {
        let falha = new Discord.MessageEmbed()
          .setColor('#36393F')
          .setDescription(`**Não foi possível recarregar o comando \` sn!${args[0]} \`** \n\n Erro:${err} \n\n`)
          .setTimestamp()
          message.channel.send(falha);
      }
  } else {
    if(!whitelist) return message.channel.reply(`comando liberado apenas para meu desenvolvedor.`);
  }
} 