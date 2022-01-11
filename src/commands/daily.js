const Discord = require("discord.js");
const firebase = require('firebase')
const ms = require("parse-ms");

exports.run = async function (client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let timeout = 84600000
    let db1ref = database.ref(`Sistemas/Economia/Delay/Daily/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db2ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db3ref = database.ref(`Sistemas/Economia/Vips/User:${message.author.id}`);
    let db1 = await database.ref(`Sistemas/Economia/Delay/Daily/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db3 = await database.ref(`Sistemas/Economia/Vips/User:${message.author.id}`).once('value')
    if(db1.val() == null || db2.val() == null || db3.val() == null) return message.channel.send(register)

        //Delay
        if (db1.val().delay !== null && timeout - (Date.now() - db1.val().delay) > 0) {
            let time = ms(timeout - (Date.now() - db1.val().delay));
            let dl = new Discord.MessageEmbed()
            .setColor("#FF69B4")
            .setThumbnail("https://imgur.com/91GPuFR.png")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription(`Você já coletou seu premio diário,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
            return message.reply(dl) // Mensagem delay
        }
        db1ref.update({
            delay: Date.now()
        })

        if(db3.val().carbon == true) {

            //Gerar Money + Setar Money
            let daily = 4500
                db2ref.update({
                    real: db2.val().real + daily
                })

            let embed = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/0ZaSQin.gif")
            .setDescription(`Você coletou seu daily e recebeu: \n **R$${daily} Reais**`)
            .setFooter(`Bônus 1.5x por ser Carbon.`)

            message.channel.send(embed)

            } else {

                if(db3.val().gold == true) {
                //Gerar Money + Setar Money
                let daily1 = 6000
                db2ref.update({
                    real: db2.val().real + daily1
                })

                let embed = new Discord.MessageEmbed()
                .setColor("#36393F")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setThumbnail("https://imgur.com/0ZaSQin.gif")
                .setDescription(`Você coletou seu daily e recebeu: \n **R$${daily1} Reais**`)
                .setFooter("Bônus 2x por ser Gold.")

                message.channel.send(embed)
                } else {

                    if(db3.val().safira == true) {

                        //Gerar Money + Setar Money
                        let daily2 = 9000
                        db2ref.update({
                            real: db2.val().real + daily2
                        })

                        let embed = new Discord.MessageEmbed()
                        .setColor("#36393F")
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setThumbnail("https://imgur.com/0ZaSQin.gif")
                        .setDescription(`Você coletou seu daily e recebeu: \n **R$${daily2} Reais**`)
                        .setFooter("Bônus 3x por ser Safira.")

                        message.channel.send(embed)
                    } else {

                        //Gerar Money + Setar Money
                        let daily3 = 3000;
                        db2ref.update({
                           real: db2.val().real + daily3
                        })

                        let embed = new Discord.MessageEmbed()
                        .setColor("#36393F")
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setThumbnail("https://imgur.com/0ZaSQin.gif")
                        .setDescription(`Você coletou seu daily e recebeu: \n **R$${daily3} Reais**`)
                        .setFooter("Adquira um plano e tenha vantagens.")

                        message.channel.send(embed)
                    }
                }
            }
}