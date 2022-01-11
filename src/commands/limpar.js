const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null) return message.channel.send(register)

            if(message.content.includes("ficha")) {

                let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
                let db1 = await database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')

                if(db1.val().procurado == false) return message.reply(`você não está procurado.`)
                if(db.val().real < 2500) return message.reply(`você precisa de R$2500 reais para limpar sua ficha.`)

                dbref.update({
                    real: db.val().real - 2500
                })
                db1ref.update({
                    procurado: false
                })

                let fichalimpa = new Discord.MessageEmbed()
                .setColor("#36393F")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription(`Você limpou sua ficha e pagou: \n > **R$2500**`)
                .setThumbnail("https://imgur.com/r7dxeZv.png")

                message.channel.send(fichalimpa)

            } else {
                return message.reply(`a forma correta é sn!limpar ficha`)
            }
}