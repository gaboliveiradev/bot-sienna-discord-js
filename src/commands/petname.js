const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dbref = database.ref(`Sistemas/Economia/PetInfo/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/PetInfo/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null) return message.channel.send(register)

    let name = args.slice(0).join(" ");

    if(!name) return message.reply(`porfavor escreva a frente do comando o nome escolhido para seu pet.`)

    dbref.update({
        nome: name,
    })

    return message.reply(`nome do seu pet alterado para **${name}**`)
}