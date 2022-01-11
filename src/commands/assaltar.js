const Discord = require('discord.js');
const ms = require("parse-ms");

exports.run = async function(client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    //Variaveis
    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db2ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db3ref = database.ref(`Sistemas/Economia/Delay/Assaltar/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db3 = await database.ref(`Sistemas/Economia/Delay/Assaltar/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null || db2.val() == null || db3.val() == null) return message.channel.send(register)

    //Delay
    let time = ms(14400000 - (Date.now() - db3.val().delay))
        let dl = new Discord.MessageEmbed()
        .setColor("#FF69B4")
        .setThumbnail("https://imgur.com/91GPuFR.gif")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você não pode assaltar agora,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
    if (db3.val().delay !== null && 14400000 - (Date.now() - db3.val().delay) > 0) return message.channel.send(dl)
    //Atualizando o DL
    db3ref.update({
        delay: Date.now()
    })

    //Randominzando Chance de dar certou ou Errado
    let random = Math.floor(Math.random() * 2 - 1) + 1;

    //Assaltando
    if(random == 1) {

        //Gerar Money
        let gerarM = Math.floor(Math.random() * 3000)

        //Enviar Embed
        let assaltou = new Discord.MessageEmbed()
        .setColor("#36393F")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail(`https://imgur.com/0bwzMle.png`)
        .setDescription(`Você assaltou um pai de família que tinha recebido seu salário e estava voltando pra casa, e ganhou: \n > **R$${gerarM}**`)
        
        message.channel.send(assaltou)

        //Atualizar DB
        dbref.update({
            real: db.val().real + gerarM
        })
        db1ref.update({
            procurado: true,
        })

    } else {

        //Gerar Money perdido
        let gerarS = Math.floor(Math.random() * 3000)

        //Enviar Embed
        let deuruim = new Discord.MessageEmbed()
        .setColor("#36393F")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://imgur.com/1PkGbba.png")
        .setDescription(`Deu ruim,os policias chegaram a tempo e você trocou tiro com eles mas foi pego, subornou os policiais para te soltarem e gastou: \n > **R$${gerarS}**`)

        message.channel.send(deuruim)

        //Atualizando DB
        dbref.update({
            real: db.val().real - gerarS
        })
        db1ref.update({
            procurado: true
        })
    }
}