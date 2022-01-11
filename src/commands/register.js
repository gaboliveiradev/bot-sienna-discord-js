const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    //Variaveis Database
    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db2ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db3ref = database.ref(`Sistemas/Economia/Delay/Assaltar/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db5ref = database.ref(`Sistemas/Economia/Delay/ColherDroga/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db6ref = database.ref(`Sistemas/Economia/Delay/Daily/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db7ref = database.ref(`Sistemas/Economia/Vips/User:${message.author.id}`);
    let db8ref = database.ref(`Sistemas/Economia/Delay/Pescar/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db9ref = database.ref(`Sistemas/Economia/Mochila/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db10ref = database.ref(`Sistemas/Economia/Fome/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db11ref = database.ref(`Sistemas/Economia/Delay/PlantarDrogas/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db12ref = database.ref(`Sistemas/Economia/Delay/RoubarBanco/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db13ref = database.ref(`Sistemas/Economia/Delay/RoubarCofre/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db14ref = database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db15ref = database.ref(`Sistemas/Registro/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db15 = await database.ref(`Sistemas/Registro/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db17ref = database.ref(`Sistemas/Economia/Delay/Golds/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db18ref = database.ref(`Sistemas/Economia/Delay/Roubou/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db19ref = database.ref(`Sistemas/Economia/PetInfo/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db20ref = database.ref(`Sistemas/Economia/Delay/BrincarPet/Servidor:${message.guild.id}/User:${message.author.id}`)
    let db21ref = database.ref(`Sistemas/Economia/Delay/Hackear/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db22ref = database.ref(`Sistemas/Economia/Delay/Minerar/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db23ref = database.ref(`Sistemas/Economia/Computador/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db24ref = database.ref(`Sistemas/Economia/Delay/MinerarBTC/Servidor:${message.guild.id}/User:${message.author.id}`);

    if(db15.val() == null) {

    //Setando Na Database
    dbref.set({
        real: 0,
        btc: 0,
    })
    db1ref.set({
        procurado: false,
    })
    db2ref.set({
        pick: false,
        glock: false,
        m4: false,
        muniglock: 0,
        munim4: 0,
        c4: 0,
    })
    db3ref.set({
        delay: 0,
    })
    db5ref.set({
        delay: 0,
    })
    db6ref.set({
        delay: 0,
    })
    db7ref.set({
        carbon: false,
        gold: false,
        safira: false,
    })
    db8ref.set({
        delay: 0,
    })
    db9ref.set({
        peixe: 0,
        carvão: 0,
        trigo: 0,
        ferro: 0,
        ouro: 0,
        diamante: 0,
        esmeralda: 0,
        rubi: 0,
        maconha: 0,
    })
    db10ref.set({
        fome: 100,
        sede: 100,
    })
    db11ref.set({
        delay: 0,
    })
    db12ref.set({
        delay: 0,
    })
    db13ref.set({
        delay: 0,
    })
    db14ref.set({
        gold: 0,
    })
    db15ref.set({
        registrado: true,
    })
    db17ref.set({
        delay: 0,
    })
    db18ref.set({
        delay: 0,
    })
    db19ref.set({
        pet: false,
        nome: "s!petname <nome>",
        imgPet: "link.png",
        xpPet: 0,
        levelPet: 1,
        fomePet: 100,
    })
    db20ref.set({
        delay: 0,
    })
    db21ref.set({
        delay: 0,
    })
    db22ref.set({
        delay: 0,
    })
    db23ref.set({
        computador: false,
        gpu: false,
    })
    db24ref.set({
        delay: 0,
    })


    //Embed Registrado.
    let registrado = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá sou eu de novo a Kuina,acabei de te registrar no banco de dados da Sienna.Caso encontre bugs em algum comando use ``s!bug`` para reportar.Reportando bugs você poderá receber recompensas incrivéis.")

    message.channel.send(registrado)
    } else {
        if (db15.val().registrado == true) return message.reply(`você já está registrado.`)
    }
}