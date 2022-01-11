const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    //Registro
    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Mochila/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Mochila/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null) return message.channel.send(register)

    //Valores Dos Itens
    let selldrugs = 100;
    let sellfish = 120;
    let sellwheat = 140;
    let sellcoal = 160;
    let selliron = 180;
    let sellgold = 200;
    let selldiamond = 220;
    let sellruby = 240;
    let sellemerald = 300;
    //Pegando Valor Itens
    let drugs = [db1.val().maconha]
    let fish = [db1.val().peixe]
    let wheat = [db1.val().trigo]
    let coal = [db1.val().carvão]
    let iron = [db1.val().ferro]
    let gold = [db1.val().ouro]
    let diamond = [db1.val().diamante]
    let ruby = [db1.val().rubi]
    let emerald = [db1.val().esmeralda]
    //Somando Os Valores
    let solddrugs = Math.floor(drugs * selldrugs);
    let soldfish = Math.floor(fish * sellfish);
    let soldwheat = Math.floor(wheat * sellwheat);
    let soldcoal = Math.floor(coal * sellcoal);
    let soldiron = Math.floor(iron * selliron);
    let soldgold = Math.floor(gold * sellgold)
    let solddiamond = Math.floor(diamond * selldiamond);
    let soldruby = Math.floor(ruby * sellruby);
    let soldemerald = Math.floor(emerald * sellemerald);

    let sellitens = new Discord.MessageEmbed()
    .setColor("#4682B4")
    .setThumbnail("https://imgur.com/RgC0tzC.png")
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription("Logo abaixo você poderá ver os itens que estão disponível para serem vendidos.Para vender algum item basta digitar o ``nome`` dele no chat abaixo e você ira efetuar a venda. \n\n" + ` <:Drugs_Sienna:800794686389223424>Maconha - **R$${selldrugs}** \n <:Fish_Sienna:800783563200135169>Peixe - **R$${sellfish}** \n <:Wheat_Sienna:800783563770560512>Trigo - **R$${sellwheat}** \n <:Coal_Sienna:799831898108198923>Carvão - **R$${sellcoal}** \n <:Iron_Sienna:799831897227132988>Ferro - **R$${selliron}** \n <:Gold_Sienna:799831896678465568>Ouro - **R$${sellgold}** \n <:Diamond_Sienna:799831896380014593>Diamante - **R$${selldiamond}** \n <:Ruby_Sienna:799831914831282248>Rubi - **R$${sellruby}** \n <:Emerald_Sienna:799831914729963532>Esmeralda - **R$${sellemerald}**`)
    message.channel.send(sellitens)

    //Processo De Venda Utilizando Coletor
    let collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
    collector.on('collect', m => {
        if(m.content.toLowerCase() == 'maconha' || m.content.toLowerCase() == 'maconhas') {
            collector.stop()
            if(drugs < 1) return message.reply(`você não possui maconha para vender.`)
            dbref.update({real: db.val().real + solddrugs})
            db1ref.update({maconha: db1.val().maconha - drugs})

            let sell = new Discord.MessageEmbed()
            .setColor("#4682B4")
            .setDescription(`Maconha vendida com sucesso. \n **Quantia: ${drugs}** \n **Valor: R$${solddrugs}**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/RgC0tzC.png")
            message.channel.send(sell)
        } else if(m.content.toLowerCase() == 'peixe' || m.content.toLowerCase() == 'peixes') {
            collector.stop()
            if(fish < 1) return message.reply(`você não possui peixe para vender.`)
            dbref.update({real: db.val().real + soldfish})
            db1ref.update({peixe: db1.val().peixe - fish})

            let sell = new Discord.MessageEmbed()
            .setColor("#4682B4")
            .setDescription(`Peixe vendido com sucesso. \n **Quantia: ${fish}** \n **Valor: R$${soldfish}**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/RgC0tzC.png")
            message.channel.send(sell)
        } else if(m.content.toLowerCase() == 'trigo' || m.content.toLowerCase() == 'trigos') {
            collector.stop()
            if(wheat < 1) return message.reply(`você não possui trigo para vender.`)
            dbref.update({real: db.val().real + soldwheat})
            db1ref.update({trigo: db1.val().trigo - wheat})

            let sell = new Discord.MessageEmbed()
            .setColor("#4682B4")
            .setDescription(`Trigo vendido com sucesso. \n **Quantia: ${wheat}** \n **Valor: R$${soldwheat}**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/RgC0tzC.png")
            message.channel.send(sell)
        } else if(m.content.toLowerCase() == 'carvão' || m.content.toLowerCase() == 'carvao') {
            collector.stop()
            if(coal < 1) return message.reply(`você não possui carvão para vender.`)
            dbref.update({real: db.val().real + soldcoal})
            db1ref.update({carvão: db1.val().carvão - coal})

            let sell = new Discord.MessageEmbed()
            .setColor("#4682B4")
            .setDescription(`Carvão vendido com sucesso. \n **Quantia: ${coal}** \n **Valor: R$${soldcoal}**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/RgC0tzC.png")
            message.channel.send(sell)
        } else if(m.content.toLowerCase() == 'ferro' || m.content.toLowerCase() == 'ferros') {
            collector.stop()
            if(iron < 1) return message.reply(`você não possui ferro para vender.`)
            dbref.update({real: db.val().real + soldiron})
            db1ref.update({ferro: db1.val().ferro - iron})

            let sell = new Discord.MessageEmbed()
            .setColor("#4682B4")
            .setDescription(`Ferro vendido com sucesso. \n **Quantia: ${iron}** \n **Valor: R$${soldiron}**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/RgC0tzC.png")
            message.channel.send(sell)
        } else if(m.content.toLowerCase() == 'ouro' || m.content.toLowerCase() == 'ouros') {
            collector.stop()
            if(gold < 1) return message.reply(`você não possui ouro para vender.`)
            dbref.update({real: db.val().real + soldgold})
            db1ref.update({ouro: db1.val().ouro - gold})

            let sell = new Discord.MessageEmbed()
            .setColor("#4682B4")
            .setDescription(`Ouro vendido com sucesso. \n **Quantia: ${gold}** \n **Valor: R$${soldgold}**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/RgC0tzC.png")
            message.channel.send(sell)
        } else if(m.content.toLowerCase() == 'diamante' || m.content.toLowerCase() == 'diamantes') {
            collector.stop()
            if(diamond < 1) return message.reply(`você não possui diamante para vender.`)
            dbref.update({real: db.val().real + solddiamond})
            db1ref.update({diamante: db1.val().diamante - diamond})

            let sell = new Discord.MessageEmbed()
            .setColor("#4682B4")
            .setDescription(`Diamante vendido com sucesso. \n **Quantia: ${diamond}** \n **Valor: R$${solddiamond}**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/RgC0tzC.png")
            message.channel.send(sell)
        } else if(m.content.toLowerCase() == 'rubi' || m.content.toLowerCase() == 'rubis') {
            collector.stop()
            if(ruby < 1) return message.reply(`você não possui rubi para vender.`)
            dbref.update({real: db.val().real + soldruby})
            db1ref.update({rubi: db1.val().rubi - ruby})

            let sell = new Discord.MessageEmbed()
            .setColor("#4682B4")
            .setDescription(`Rubi vendido com sucesso. \n **Quantia: ${ruby}** \n **Valor: R$${soldruby}**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/RgC0tzC.png")
            message.channel.send(sell)
        } else if(m.content.toLowerCase() == 'esmeralda' || m.content.toLowerCase() == 'esmeraldas') {
            collector.stop()
            if(emerald < 1) return message.reply(`você não possui esmeralda para vender.`)
            dbref.update({real: db.val().real + soldemerald})
            db1ref.update({esmeralda: db1.val().esmeralda - emerald})

            let sell = new Discord.MessageEmbed()
            .setColor("#4682B4")
            .setDescription(`Esmeralda vendido com sucesso. \n **Quantia: ${emerald}** \n **Valor: R$${soldemerald}**`)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setThumbnail("https://imgur.com/RgC0tzC.png")
            message.channel.send(sell)
        }
    })

}