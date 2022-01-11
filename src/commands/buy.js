const Discord = require("discord.js");

exports.run = async function(client, message, args, database) {

    //Registro
    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")
    let db0 = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db0.val() == null) return message.channel.send(register)

    //Comprar Picareta
    let db1ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db2ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1 = await database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')

    let valor = 1000;
    if(!args[0]) return message.reply("forma correta ``s!buy <item> <quantia>``")

    if(message.content.toLowerCase().includes('picareta') || message.content.toLowerCase().includes('pick')) {

        //Verificações
        if(db1.val().pick == true) return message.reply(`você já possui uma picareta.`)
        if(db2.val().real < valor) return message.reply(`você não tem dinheiro suficiente.`)

        //Atualizar database
        db1ref.update({
            pick: true,
        })
        db2ref.update({
            real: db2.val().real - valor
        })

        //Enviar Embed
        let b = new Discord.MessageEmbed()
        .setColor("#4682B4")
        .setDescription(`Picareta comprada com sucesso. \n **Quantia: 1** \n **Valor: R$${valor}**`)
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://imgur.com/RgC0tzC.png")

        message.channel.send(b)
    }

    //Comprar Glock
    let db3ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db4ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);

    let valor1 = 18000;

    if(message.content.toLowerCase().includes('glock')) {

        //Verificações
        if(db1.val().glock == true) return message.reply(`você já possui uma glock.`)
        if(db2.val().real < valor1) return message.reply(`você não tem dinheiro suficiente.`)

        //Atualizar database
        db3ref.update({
            glock: true,
        })
        db4ref.update({
            real: db2.val().real - valor1,
        })

        //Enviar Embed
        let b1 = new Discord.MessageEmbed()
        .setColor("#4682B4")
        .setDescription(`Glock comprada com sucesso. \n **Quantia: 1** \n **Valor: R$${valor1}**`)
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://imgur.com/RgC0tzC.png")

        message.channel.send(b1)
    }

    //Comprar M4
    let db5ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db6ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);

    let valor2 = 30000;

    if(message.content.toLowerCase().includes('m4')) {

        //Verificações
        if(db1.val().m4 == true) return message.reply(`você já possui uma M4.`)
        if(db2.val().real < valor2) return message.reply(`você não tem dinheiro suficiente.`)

        //Atualizar database
        db5ref.update({
            m4: true,
        })
        db6ref.update({
            real: db2.val().real - valor2,
        })

        //Enviar Embed
        let b2 = new Discord.MessageEmbed()
        .setColor("#4682B4")
        .setDescription(`M4 comprada com sucesso. \n **Quantia: 1** \n **Valor: R$${valor2}**`)
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://imgur.com/RgC0tzC.png")

        message.channel.send(b2)
    }

    //Comprar Munição De Glock
    let db7ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db8ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);

    if(message.content.toLowerCase().includes('muni9mm')) {
        let quantia = 0;
        let valor3 = 0;
        if (parseInt(args[1]) < 1 || args[1] == 'undefined' || !args[1]) {
            quantia = 1;
            valor3 = 300;
        } else {
            quantia = parseInt(args[1]);
            for(let i = 0 ; i < parseInt(args[1]) ; i++) {
                valor3 += 300; 
            }
        }

        //Verificação
        if(db2.val().real < valor3) return message.reply(`você não tem dinheiro suficiente.`)

        //Atualizar database
        db7ref.update({
            muniglock: db1.val().muniglock + quantia,
        })
        db8ref.update({
            real: db2.val().real - valor3
        })

        //Enviar Embed
        let b3 = new Discord.MessageEmbed()
        .setColor("#4682B4")
        .setDescription(`Munição de glock comprada com sucesso. \n **Quantia: ${quantia}** \n **Valor: R$${valor3}**`)
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://imgur.com/RgC0tzC.png")

        message.channel.send(b3)
    }

    //Comprar Munição De M4
    let db9ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db10ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);

    if(message.content.toLowerCase().includes('muni45mm')) {
        let quantia1 = 0;
        let valor4 = 0;
        if (parseInt(args[1]) < 1 || args[1] == 'undefined' || !args[1]) {
            quantia1 = 1;
            valor4 = 500;
        } else {
            quantia1 = parseInt(args[1]);
            for(let i = 0 ; i < parseInt(args[1]) ; i++) {
                valor4 += 500; 
            }
        }

        //Verificação
        if(db2.val().real < valor4) return message.reply(`você não tem dinheiro suficiente.`)

        //Atualizar database
        db9ref.update({
            munim4: db1.val().munim4 + quantia1,
        })
        db10ref.update({
            real: db2.val().real - valor4
        })

        //Enviar Embed
        let b4 = new Discord.MessageEmbed()
        .setColor("#4682B4")
        .setDescription(`Munição de M4 comprada com sucesso. \n **Quantia: ${quantia1}** \n **Valor: R$${valor4}**`)
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://imgur.com/RgC0tzC.png")

        message.channel.send(b4)
    }

    //Comprar Computador
    let db11ref = database.ref(`Sistemas/Economia/Computador/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db11 = await database.ref(`Sistemas/Economia/Computador/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')

    let valor5 = 20000;

    if(message.content.toLowerCase().includes('computador') || message.content.toLowerCase().includes('pc')) {

        if(db11.val().computador == true) return message.reply(`você já possui um computador`)
        if(db2.val().real < valor5) return message.reply(`você não tem dinheiro suficiente.`)

        //Atualizar Database
        db11ref.update({
            computador: true,
        })
        db2ref.update({
            real: db2.val().real - valor5
        })

        //Enviar Embed
        let b5 = new Discord.MessageEmbed()
        .setColor("#4682B4")
        .setDescription(`Computador comprado com sucesso. \n **Quantia: 1** \n **Valor: R$${valor5}**`)
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://imgur.com/RgC0tzC.png")

        message.channel.send(b5)
    }

    //Comprar GPU
    let valor6 = 6000;

    if(message.content.toLowerCase().includes('rtx')) {

        if(db11.val().gpu == true) return message.reply(`você já possui uma gtx`)
        if(db2.val().real < valor6) return message.reply(`você não tem dinheiro suficiente.`)

        db11ref.update({
            gpu: true,
        })
        db2ref.update({
            real: db2.val().real - valor6
        })

        //Enviar Embed
        let b6 = new Discord.MessageEmbed()
        .setColor("#4682B4")
        .setDescription(`Placa De Vídeo comprada com sucesso. \n **Quantia: 1** \n **Valor: R$${valor6}**`)
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://imgur.com/RgC0tzC.png")

        message.channel.send(b6)
    }
    
}