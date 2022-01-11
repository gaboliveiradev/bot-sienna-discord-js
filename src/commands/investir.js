const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async (client, message, args, database) => {

    //Variaveis && Funcões

    function isOdd(num) {
        if ((num % 2) == 0) return false;
        else if ((num % 2) == 1) return true;
    }

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null) return message.channel.send(register)


    let colour = args[0]
    let money = parseInt(args[1]);
    let avatar = message.author.displayAvatarURL({ format: 'png' })
    let random = Math.floor(Math.random() * 5);

    let sa = new Discord.MessageEmbed()
    .setColor("#36393F")
    .setDescription("**Escolha uma ação:** \n <:Nike:796397623439261716>Nike: 1.5x - 50% \n <:Tesla:796400183558275092>Tesla: 3x - 20% \n <:Amazon:796397650030231562>Amazon: 15x - 5%")
    .setAuthor(message.author.username, message.author.avatarURL())

    //Verificaçoes
    if(message.content.includes('-')) return message.reply(`você não pode investir valores negativos.`);
    if(!colour) return message.channel.send(sa)
    colour = colour.toLowerCase()
    if(!money) return message.reply(`especifique uma ação e um valor`)
    if(money > 10000) return message.reply(`valor max para investir é de 10 mil reais.`)

        if(money > db.val().real) return message.reply(`você não tem esse valor para investir.`)
        if (colour == "t" || colour.includes("tesla")) colour = 0;
        else if (colour == "n" || colour.includes("nike")) colour = 1;
        else if (colour == "a" || colour.includes("amazon")) colour = 2;
        else return message.channel.send(sa)

        if(random == 0 && colour == 2) {
            money *= 15

            //Atualizar Database
            dbref.update({
                real: parseInt(db.val().real) + parseInt(money)
            })

            //Enviar Embed
            let libras = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setAuthor(message.author.username, avatar)
            .setThumbnail("https://imgur.com/YOkQLWD.png")
            .setDescription(`As ações da Amazon valorizaram e você GANHOU: \n > **R$${money}**`)
            .setFooter("Multiplicador De Ações: 15x")

            message.channel.send(libras)
        } else if (random == 0 && colour == 1) {
            money = parseInt(money * 1.5)

            //Atualizando Database
            dbref.update({
                real: parseInt(db.val().real) + parseInt(money)
            })

            //Enviar Embed
            let nike = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setAuthor(message.author.username, avatar)
            .setThumbnail("https://imgur.com/YOkQLWD.png")
            .setDescription(`As ações da Nike valorizaram e você GANHOU: \n > **R$${money}**`)
            .setFooter("Multiplicador De Açoes: 1.5x")

            message.channel.send(nike)
        } else if (random == 0 && colour == 0) {
            money = parseInt(money * 3)

            //Atualizando Database
            dbref.update({
                real: parseInt(db.val().real) + parseInt(money)
            })

            //Enviar Embed
            let euro = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setAuthor(message.author.username, avatar)
            .setThumbnail("https://imgur.com/YOkQLWD.png")
            .setDescription(`As açoes da Tesla valorizaram e você GANHOU: \n > **R$${money}**`)
            .setFooter("Multiplicador De Açoes: 3x")

            message.channel.send(euro)
        } else {
            //Atualizando Database
            let div = Math.floor(money / 4)
            let preju = Math.floor(div + money)
            dbref.update({
                real: parseInt(db.val().real) - preju
            })

            //Enviar Embed
            let perdeu = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setAuthor(message.author.username, avatar)
            .setThumbnail("https://imgur.com/k3UGYvs.png")
            .addField(`Você investiu e suas ações foram desvalorizada e acabou perdendo na bolsa de valores o valor de:`,`>   **R$${preju} **`)

            message.channel.send(perdeu)
        }
}