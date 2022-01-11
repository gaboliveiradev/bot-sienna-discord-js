const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dbref = database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
        if(db.val() == null) return message.channel.send(register)

            if(db.val().procurado == false) {

                let inoc = new Discord.MessageEmbed()
                .setColor("#36393F")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription(`Você é um bom garoto,sua ficha está limpa.Continue assim para evitar problemas.`)
                .setThumbnail('https://imgur.com/r7dxeZv.png')

                message.channel.send(inoc)
            } else {

                let proc = new Discord.MessageEmbed()
                .setColor("#36393F")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription(`Você aprontou de mais e sua ficha está suja e os policias estão atrás de você,tome cuidado para não ser pego.`)
                .setThumbnail('https://imgur.com/r7dxeZv.png')
                .setFooter(`Use sn!limpar ficha para limpar sua ficha.`)

                message.channel.send(proc)
            }
}