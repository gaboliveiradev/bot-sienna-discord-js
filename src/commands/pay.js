const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    
    //Principais Variaveis
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let quantia = parseInt(args[1]);
    let usuario = message.author;

    if(!user) return message.reply(`Porfavor, mencione alguem para pagar.`)
    if(user.id == "784630597821399072") return message.reply(`estou triste com você e não quer seu dinheiro.`)
    if(user == message.author.id) return message.reply(`Você não pode pagar a si mesmo.`)
    if(isNaN(quantia)) return message.reply(`Valor inválido,informe a quantia que deseja enviar.`)
    if(message.content.includes('-')) return message.reply(`Você não pode pagar valores negativos.`)

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let registermenc = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.A pessoa que você mencionou não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    //Variaveis Database
    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`) //Autor Da Mensagem
    let db1ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${user.user.id}`) //Usuario Mencionado
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value') //Autor Da Mensagem Get Value
    let db1 = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${user.user.id}`).once('value') //Usuario Mencionado Get Value
    if(db.val() == null) return message.channel.send(register)
    if(db1.val() == null) return message.channel.send(registermenc)
    
    //Verificações
    if(db.val().real < args[1]) return message.reply(`Você não tem money suficiente para isso.`)

    //Embed De Pagamento
    let pagou = new Discord.MessageEmbed()
    .setColor("#36393F")
    .setAuthor(usuario.tag, usuario.avatarURL())
    .setThumbnail("https://imgur.com/3g15gQr.gif")
    .setFooter(`Use ${process.env.PREFIX}!help para ver os comandos de economia.`)
    .setDescription(`Você pagou a ${user.user.username}: \n  > **R$${args[1]}**`)

    message.channel.send(pagou)

    //Atualizando a Database

    //Autor Da Mensagem
    dbref.update({
        real: parseInt(db.val().real) - quantia
    })

    //Usuario Mencionado
    db1ref.update({
        real: parseInt(db1.val().real) + quantia
    })
}