const Discord = require('discord.js');
const ms = require('parse-ms');
const pixapi = require('pixapi');

exports.run = async function(client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let db00 = await database.ref(`Sistemas/Economia/PetInfo/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db = await database.ref(`Sistemas/Economia/Delay/Assaltar/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Delay/ColherDroga/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Delay/Daily/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db3 = await database.ref(`Sistemas/Economia/Delay/Golds/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db4 = await database.ref(`Sistemas/Economia/Delay/Pescar/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db5 = await database.ref(`Sistemas/Economia/Delay/PlantarDrogas/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db6 = await database.ref(`Sistemas/Economia/Delay/RoubarBanco/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db7 = await database.ref(`Sistemas/Economia/Delay/RoubarCofre/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db8 = await database.ref(`Sistemas/Economia/Delay/Roubou/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db9 = await database.ref(`Sistemas/Economia/Delay/Minerar/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db10 = await database.ref(`Sistemas/Economia/Delay/Hackear/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db11 = await database.ref(`Sistemas/Economia/Delay/BrincarPet/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null || db2.val() == null || db3.val() == null || db4.val() == null || db5.val() == null || db6.val() == null || db7.val() == null || db8.val() == null || db9.val() == null || db10.val() == null || db00.val() == null) return message.channel.send(register)

    //Delay Assaltar
    if(db.val().delay !== null && 14400000 - (Date.now() - db.val().delay) > 0) {
        let time = ms(14400000 - (Date.now() - db.val().delay));
        delayassaltar = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delayassaltar = `Disponível`
    }
    //Delay Colher
    if(db1.val().delay !== null && 7200000 - (Date.now() - db1.val().delay) > 0) {
        let time = ms(7200000 - (Date.now() - db1.val().delay));
        delaycolher = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delaycolher = `Disponível`
    }
    //Delay Daily
    if(db2.val().delay !== null && 84600000 - (Date.now() - db2.val().delay) > 0) {
        let time = ms(84600000 - (Date.now() - db2.val().delay));
        delaydaily = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delaydaily = `Disponível`
    }
    //Delay Golds
    if(db3.val().delay !== null && 84600000 - (Date.now() - db3.val().delay) > 0) {
        let time = ms(84600000 - (Date.now() - db3.val().delay));
        delaygolds = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delaygolds = `Disponível`
    }
    //Delay Pescar
    if(db4.val().delay !== null && 14400000 - (Date.now() - db4.val().delay) > 0) {
        let time = ms(14400000 - (Date.now() - db4.val().delay));
        delaypescar = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delaypescar = `Disponível`
    }
    //Delay Plantar
    if(db5.val().delay !== null && 7200000 - (Date.now() - db5.val().delay) > 0) {
        let time = ms(7200000 - (Date.now() - db5.val().delay));
        delayplantar = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delayplantar = `Disponível`
    }
    //Delay RoubarBanco
    if(db6.val().delay !== null && 7200000 - (Date.now() - db6.val().delay) > 0) {
        let time = pixapi.formatTimer(6.048e+8 - (Date.now() - db6.val().delay));
        delayroubarbanco = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delayroubarbanco = `Disponível`
    }
    //Delay RoubarCofre
    if(db7.val().delay !== null && 14400000 - (Date.now() - db7.val().delay) > 0) {
        let time = ms(14400000 - (Date.now() - db7.val().delay));
        delayroubarcofre = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delayroubarcofre = `Disponível`
    }
    //Delay Roubar
    if(db8.val().delay !== null && 14400000 - (Date.now() - db8.val().delay) > 0) {
        let time = ms(14400000 - (Date.now() - db8.val().delay));
        delayroubar = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delayroubar = `Disponível`
    }
    //Delay Minerar
    if(db9.val().delay !== null && 7200000 - (Date.now() - db9.val().delay) > 0) {
        let time = ms(7200000 - (Date.now() - db9.val().delay));
        delayminerar = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delayminerar = `Disponível`
    }
    //Delay Hackear
    if(db10.val().delay !== null && 14400000 - (Date.now() - db10.val().delay) > 0) {
        let time = ms(14400000 - (Date.now() - db10.val().delay));
        delayhackear = `${time.hours}h ${time.minutes}m e ${time.seconds}s`
       } else {
        delayhackear = `Disponível`
    }
    //Delay Brincar Pet
    if(db00.val().pet == true) {
        if(db11.val().delay !== null && 600000 - (Date.now() - db11.val().delay) > 0) {
            let time = ms(600000 - (Date.now() - db11.val().delay));
            delayfunpet = `${time.minutes}m e ${time.seconds}s`
           } else {
            delayfunpet = `Disponível`
        }
    } else {
        delayfunpet = `Você não possui um pet`
    }

    




    //Embed
    let tempo = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Sienna Cooldown")
    .setThumbnail("https://imgur.com/0QQLIz5.png")
    .setDescription("Aqui você poderá ver quanto tempo falta para você utilizar tal comando novamente.")
    .addFields([
        {name: `Assaltar`, value:`${delayassaltar}`, inline: true},
        {name: `Colher`, value:`${delaycolher}`, inline: true},
        {name: `Daily`, value:`${delaydaily}`, inline: true},
        {name: `Resgatar`, value:`${delaygolds}`, inline: true},
        {name: `Pescar`, value:`${delaypescar}`, inline: true},
        {name: `Plantar`, value:`${delayplantar}`, inline: true},
        {name: `RoubarBanco`, value:`${delayroubarbanco}`, inline: true},
        {name: `RoubarCofre`, value:`${delayroubarcofre}`, inline: true},
        {name: `Roubar`, value:`${delayroubar}`, inline: true},
        {name: `Minerar`, value: `${delayminerar}`, inline: true},
        {name: `Hackear`, value: `${delayhackear}`, inline: true},
        {name: `Brincar Pet`, value: `${delayfunpet}`, inline: true},
    ])
    message.channel.send(tempo)
}