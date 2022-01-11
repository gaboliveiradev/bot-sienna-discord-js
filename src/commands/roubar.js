const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async function(client, message, args, database) {
  
  //Função
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //Pega o User Mencionado
  let user = message.mentions.users.first();

  let register = new Discord.MessageEmbed()
  .setColor("#483D8B")
  .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
  .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

  let registermenc = new Discord.MessageEmbed()
  .setColor("#483D8B")
  .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
  .setDescription("Olá me chamo Kuina,sou assistente da Sienna.A pessoa que você mencionou não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

  //Verificação
  if(!user) return message.reply(`mencione alguem que deseje roubar.`)

  //Variaveis Database
  let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`); //Autor Da Mensagem
  let db1ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${user.id}`); //Usuário Mencionado
  let db2ref = database.ref(`Sistemas/Economia/Delay/Roubou/Servidor:${message.guild.id}/User:${message.author.id}`); //Delay Autor
  let db3ref = database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`); //Ficha Criminal
  let db99ref = await database.ref(`Sistemas/Economia/Vips/User:${user.id}`);
  let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
  let db1 = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${user.id}`).once('value')
  let db2 = await database.ref(`Sistemas/Economia/Delay/Roubou/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
  let db3 = await database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
  let db99 = await database.ref(`Sistemas/Economia/Vips/User:${user.id}`).once('value')
  if(db.val() == null || db2.val() == null || db3.val() == null || db99.val() == null) return message.channel.send(register)
  if(db1.val() == null) message.channel.send(registermenc)

  //Sistema AntiRoubo
  if(db99.val().gold == true) return message.reply(`você não pode roubar um Deus Gold.`)
  if(db99.val().safira == true) return message.reply(`você não pode roubar um Deus Safira.`)

  let usersaldo = [db1.val().real]
  let delayroubo = [db2.val().delay]

  //Delay Para Roubar Novamente
  await timeout(500)

  let time = ms(14400000 - (Date.now() - delayroubo))
  let dl = new Discord.MessageEmbed()
  .setDescription(`A polícia está atrás de você, espere até que a poeira tenha abaixado para poder roubar novamente.`)
  .setFooter('Use sn!help para ver os comandos.')
  .setFooter(`Você Poderá roubar novamente daqui: ${time.hours}h ${time.minutes}m e ${time.seconds}s`)
  .setColor('#36393F')
  if (delayroubo !== 0 && 14400000 - (Date.now() - delayroubo) > 0) return message.channel.send(dl)

  //Informações Sobre a Vitima
  let vitima = new Discord.MessageEmbed()
  .setDescription(`**Alvo do crime:** <@${user.id}>`)
  .addField(`${user.username}.`, `Saldo: ${usersaldo}`)
  .setColor('#36393F')
  .setThumbnail('https://imgur.com/PvUNKgM.png')
  .setFooter('Use sn!help para ver todos os comandos.')

  //Verificação
  if(usersaldo < 500) {
    return message.reply(`você não pode assaltar usuários com menos de R$500 reais.`)
  } else {
    vitima.setFooter(`Reaja com ✅ para confirmar o roubo.`)
    let msg = await message.channel.send(vitima);
    await msg.react('✅');
    await msg.react('❎');

    //Filtro & Collector
    const filter = (reaction, usuario) => usuario.id == message.author.id;
    var collector = msg.createReactionCollector(filter, { time: 30000 });

    //Collector
    collector.on('collect', async (reaction, usuario) => {
      switch (reaction.emoji.name) {
        case '✅':
          let delay = 10;
          msg.reactions.removeAll()
          for (let i = 0; i < 10; i++) {
            await timeout(1000)
            if (delay == 0) {
              continue;
            } else {
              delay = delay - 1
              let roubado = new Discord.MessageEmbed()
                .setDescription(`Você está roubando a vítima: ${user}\n Espere alguns segundos para o roubo ser finalizado`)
                .setColor(`#36393F`)
                .setFooter(`Aguarde ${delay} Segundos para terminar o roubo...`)
              msg.edit(roubado)
            }
          }
          let quantia = Math.floor(usersaldo / 10);
          let terminou = new Discord.MessageEmbed()
            .setDescription(`Roubo terminado! Você roubou uma quantia de **R$${quantia}** Reais de ${user}`)
            .setColor(`#36393F`)
            .setFooter('Use sn!help para ver todos os comandos.')
            .setTimestamp();
          msg.edit(terminou)

          //Atualizando a Database
          dbref.update({
            real: db.val().real + quantia
          })
          db1ref.update({
            real: db1.val().real - quantia
          })
          db2ref.update({
            delay: Date.now()
          })
          db3ref.update({
            procurado: true
          })
          break;
        case '❎':
          msg.delete()
          break;
       }
     })
  }
}