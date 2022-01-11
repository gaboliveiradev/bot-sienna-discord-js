const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async function(client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    //Variaveis D
    let delaycofre = 0;
    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Delay/RoubarCofre/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db2ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db3ref = database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Delay/RoubarCofre/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db3 = await database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null || db2.val() == null || db3.val() == null) return message.channel.send(register)

    //Verificações
    if(db.val().real < 1000) return message.reply(`você precisa ter mais de 1000 reais para roubar o cofre.`)
    if(db2.val().m4 == false) return message.reply(`você precisa ter uma m4 para roubar o cofre.`)
    if(db2.val().munim4 < 10) return message.reply(`você precisa ter no min 10 balas de m4 para roubar o cofre.`)
    
    //Delay
    let time = ms(14400000 - (Date.now() - db1.val().delay))
        let dl = new Discord.MessageEmbed()
        .setColor("#FF69B4")
        .setThumbnail("https://imgur.com/91GPuFR.gif")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você não pode roubar o cofre agora,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
    if (db1.val().delay !== null && 14400000 - (Date.now() - db1.val().delay) > 0) return message.channel.send(dl)
    db1ref.update({
        delay: Date.now()
    })

    //Gerar Senha
    const gsenha = require('./gsenha.json');
    const item = gsenha[Math.floor(Math.random() * gsenha.length)];
    const filter = response => {
        return item.resposta.some(resposta => resposta.toLowerCase() === response.content.toLowerCase());
    };

    //Enviar Embed Cofre Fechado
    let cofre = new Discord.MessageEmbed()
    .setColor("#36393F")
    .setImage("https://imgur.com/UUD1KIt.png")
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription(`Para abrir o cofre você precisar acertar a senha,seja rápido(a) você tem apenas 30s antes da chegada da policia. \n\n **${item.senha}**`)
    
    message.channel.send(cofre).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {

                //Gerar Money Roubo Cofre
                let gerarM = Math.floor(Math.random() * 10000)
                
                //Atualizando a DB
                dbref.update({
                    real: db.val().real + gerarM
                })
                db3ref.update({
                    procurado: true
                })

                //Enviar Embed
                let abriucofre = new Discord.MessageEmbed()
                .setColor("#36393F")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setImage("https://imgur.com/WZ4O69t.png")
                .setDescription(`você abriu o cofre do banco central e roubou um valor de: **R$${gerarM}** reais.Os policias estão te procurando pela cidade toda,tome cuidado para não ser pego,se esconda bem.`)

                message.channel.send(abriucofre)

            })
            .catch(collected => {

                //Atualizar DB
                db3ref.update({
                    procurado: true
                })
                dbref.update({
                    real: db.val().real - 3000
                })
                db2ref.update({
                    munim4: db2.val().munim4 - 5
                })

                //Enviar Embed
                let deuruim = new Discord.MessageEmbed()
                .setColor("#36393F")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription(`Essa foi por pouco,quase que você foi pego pelos policias,você trocou tiro com eles gastou 5 munições de M4,ficou ferido foi pro hospital e teve um gasto de **R$750** reais com o hospital.`)

                message.channel.send(deuruim)

            });
    }); 
}