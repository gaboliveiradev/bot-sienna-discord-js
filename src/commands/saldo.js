const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async function (client, message, args, database) {

    let usuario = client.users.cache.get(args[0]) || client.users.cache.find(mb => mb.username == args.join(" ")) || message.mentions.users.first();
    if (!usuario) usuario = message.author;

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${usuario.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${usuario.id}`);
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${usuario.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${usuario.id}`).once('value')
    if(db.val() == null || db1.val() == null) return message.channel.send(register)

            if (message.content.includes("virtual")) {

                let btc = [db.val().btc]
        
                let embed = new Discord.MessageEmbed()
                .setColor("#36393F")
                .setAuthor(usuario.username, usuario.avatarURL())
                .setThumbnail("https://imgur.com/p2O7F25.gif")
                .setTitle(`Seu Saldo:`)
                .setDescription(`> **₿ ${btc}**`)
        
                message.channel.send(embed)
                } else if (message.content.includes("gold")) {
        
                    let gold = [db1.val().gold]
        
                    let embed2 = new Discord.MessageEmbed()
                    .setColor("#36393F")
                    .setAuthor(usuario.username, usuario.avatarURL())
                    .setThumbnail("https://imgur.com/NT7eAuO.png")
                    .setTitle("Saldo:")
                    .setDescription(`> **${gold} golds**`)
        
                    message.channel.send(embed2)
        
        
                } else {
        
                    let din = [db.val().real]
        
                    let embed1 = new Discord.MessageEmbed()
                    .setColor("#36393F")
                    .setAuthor(usuario.username, usuario.avatarURL())
                    .setThumbnail("https://imgur.com/OqwAsGs.gif")
                    .setTitle("Saldo:")
                    .setDescription(`> **R$${din}**`)
        
                    message.channel.send(embed1)
        
                }
}

