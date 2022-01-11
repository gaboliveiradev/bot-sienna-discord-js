const Discord = require('discord.js')

exports.run = async function(client, message, args, database) {
    var time = args[0];
    var reminder = args.slice(1).join(' ');

    if (!time) return message.channel.send(erro('Não posso te alertar se você não definir um tempo.'));
    if (!reminder) return message.channel.send(erro('Você esqueceu de inserir do que é para eu te lembrar.'));
  
            
    time = await time.toString();
  
    if (time.indexOf('s') !== -1) { // Seconds
      var timesec = await time.replace(/s.*/, '');
      var timems = await timesec * 1000;
    } else if (time.indexOf('m') !== -1) { // Minutes
      var timemin = await time.replace(/m.*/, '');
      timems = await timemin * 60 * 1000;
    } else if (time.indexOf('h') !== -1) { // Hours
      var timehour = await time.replace(/h.*/, '');
      timems = await timehour * 60 * 60 * 1000;
    } else if (time.indexOf('d') !== -1) { // Days
      var timeday = await time.replace(/d.*/, '');
      timems = await timeday * 60 * 60 * 24 * 1000;
    } else {
      return message.channel.send(erro('O tempo deve ser numérico [s/m/h/d]'));
    }
    let embed1 = new Discord.MessageEmbed()
    .setColor("#000000")
    .setDescription(`<:concluido:785334361129615380> ${message.author} **sistema de lembreve ativado!** \n\n Daqui a \`\`${time}\`\` irei te lembrar de: \`\`\`${reminder}\`\`\` `)

    message.channel.send(embed1);
  
    setTimeout(async function() {
        let embed = new Discord.MessageEmbed()
            .setDescription(`<a:corneta:785332621097041960> ${message.author} Você pediu para eu te lembrar de: \`\`${reminder}\`\``)
            .setColor("#000000")

        message.author.send(embed).catch(async () => {
            let msg = await message.channel.send(`${message.author}`);
            msg.delete();
            message.channel.send(embed)
        });
    }, parseInt(timems));
}


function erro(content) {
    let dajiwdjao = new Discord.MessageEmbed()
        .setDescription(content)
        .setColor("#000000")
    return dajiwdjao;
}