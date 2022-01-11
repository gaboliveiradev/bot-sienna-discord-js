const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async function (client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let timeout = 14400000
    let db1ref = database.ref(`Sistemas/Economia/Delay/Pescar/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db2ref = database.ref(`Sistemas/Economia/Mochila/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db4ref = database.ref(`Sistemas/Economia/Fome/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1 = await database.ref(`Sistemas/Economia/Delay/Pescar/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Mochila/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db4 = await database.ref(`Sistemas/Economia/Fome/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db1.val() == null || db2.val() == null || db4.val() == null) return message.channel.send(register)

            //Verificação
            if(db4.val().fome && db4.val().sede < 10) return message.reply(`você está com fome e sede,alimente-se para voltar a pescar.`)
            if(db4.val().fome < 10) return message.reply(`você está com fome,alimente-se para voltar a pescar.`)
            if(db4.val().sede < 10) return message.reply(`você está com sede,alimente-se para voltar a pescar.`)
            if (db1.val().delay !== null && timeout - (Date.now() - db1.val().delay) > 0) {
                let time = ms(timeout - (Date.now() - db1.val().delay));
                let dl = new Discord.MessageEmbed()
                .setColor("#FF69B4")
                .setThumbnail("https://imgur.com/91GPuFR.png")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription(`Você não pode pescar agora,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
                return message.reply(dl) // Mensagem delay
            }

            //Embed Princiapl
            let Pescar = new Discord.MessageEmbed()
            .setColor("#4169E1")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription("Você saiu pra pescar nesse lindo dia de sol, e acabou encontrando vários peixes seje rapido digite ``pescar`` para não deixar o peixe fugir.")
            .setImage("https://imgur.com/pp3fUZb.png")

            let msg = await message.channel.send(Pescar)


            //Coletor De Mensagem
            let collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
            
            collector.on("collect", m => {
                if(m.content.toLowerCase().includes("pescar")) {

                    //Delay
                    if (db1.val().delay !== null && timeout - (Date.now() - db1.val().delay) > 0) {
                    let time = ms(timeout - (Date.now() - db1.val().delay));
                    let dl = new Discord.MessageEmbed()
                    .setColor("#FF69B4")
                    .setThumbnail("https://imgur.com/91GPuFR.png")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setDescription(`Você não pode pescar agora,tente novamente em: \n >  **${time.minutes}m e ${time.seconds}s**`)
                    return message.reply(dl) // Mensagem delay
                    }
                    //Atualizar DB
                    db1ref.update({
                       delay: Date.now()
                    })

                    //Gerando Peixes Pescado
                    let GerarPeixeis = Math.floor(Math.random() * 20 - 10) + 10;
                    //Atualizando DB
                    db2ref.update({
                        peixe: db2.val().peixe + GerarPeixeis
                    })
                    db4ref.update({
                        fome: db4.val().fome - 10,
                        sede: db4.val().sede - 10
                    })

                    let Pescou = new Discord.MessageEmbed()
                    .setColor("#36393f")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/4Qwi4f4.png")
                    .setDescription(`Parabéns ${message.author} você foi rapído e não deixou o peixe escapar e conseguiu pescar: \n > **${GerarPeixeis} Peixes.**`)
                    msg.edit(Pescou)

                    //Parando o Colletor
                    collector.stop()
                }
            })
}