const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async function(client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let timeout = 84600000;
    let dbref = database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Delay/Golds/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Delay/Golds/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Vips/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null) return message.reply(register)

    if (db1.val().delay !== null && timeout - (Date.now() - db1.val().delay) > 0) {
        let time = ms(timeout - (Date.now() - db1.val().delay));
        let dl = new Discord.MessageEmbed()
        .setColor("#FF69B4")
        .setThumbnail("https://imgur.com/91GPuFR.png")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você já coletou seus golds diário,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
        return message.reply(dl) // Mensagem delay
    }
    db1ref.update({
        delay: Date.now(),
    })

    if(db2.val().carbon == true) {
        let goldG = 60;
        dbref.update({
            gold: db.val().gold + goldG
        })

        let resgatou = new Discord.MessageEmbed()
        .setColor("#36393F")
        .setThumbnail("https://imgur.com/zCF6R01.png")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você coletou seus gold diário e recebeu: \n > **${goldG} golds**`)
        .setFooter("Recebeu 1.5x a mais por ser carbon.")
        message.channel.send(resgatou)
    } else if(db2.val().gold == true) {
        let goldG1 = 80;
        dbref.update({
            gold: db.val().gold + goldG1
        })

        let resgatou1 = new Discord.MessageEmbed()
        .setColor("#36393F")
        .setThumbnail("https://imgur.com/zCF6R01.png")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você coletou seus gold diário e recebeu: \n > **${goldG1} golds**`)
        .setFooter("Recebeu 2x a mais por ser gold.")
        message.channel.send(resgatou1)
    } else if (db2.val().safira == true) {
        let goldG2 = 120;
        dbref.update({
            gold: db.val().gold + goldG2
        })

        let resgatou2 = new Discord.MessageEmbed()
        .setColor("#36393F")
        .setThumbnail("https://imgur.com/zCF6R01.png")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você coletou seus gold diário e recebeu: \n > **${goldG2} golds**`)
        .setFooter("Recebeu 3x a mais por ser safira.")
        message.channel.send(resgatou2)
    } else {
        let goldG3 = 40;
        dbref.update({
            gold: db.val().gold + goldG3
        })

        let resgatou3 = new Discord.MessageEmbed()
        .setColor("#36393F")
        .setThumbnail("https://imgur.com/zCF6R01.png")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você coletou seus gold diário e recebeu: \n > **${goldG3} golds** `)
        .setFooter("Adquira um plano e tenha vantagens.")
        message.channel.send(resgatou3)
    }

}