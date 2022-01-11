const Discord = require("discord.js");

exports.run = async function (client, message, args, database) {

    let quantia = parseInt(args[0])

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")


    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if (db.val() == null) return message.channel.send(register)

    if(db.val().real < quantia) return message.reply(`você não possui essa quantia para apostar.`)
    if(!quantia) return message.reply(`porfavor digite uma quantia que deseja apostar.`)
    if(quantia > 5000) return message.reply(`valor max da aposta é 5 mil reais.`)
    if(message.content.includes('-')) return message.reply(`você não pode apostar valores negativos.`)

    const slots = ['<a:seven:784634539632361513>', '<:cherry:784634570947297290>', '<:lemon:784634569218981888>'];
    const slotOne = slots[Math.floor(Math.random() * slots.length)];
    const slotTwo = slots[Math.floor(Math.random() * slots.length)];
    const slotThree = slots[Math.floor(Math.random() * slots.length)];
    const slotfour = slots[Math.floor(Math.random() * slots.length)];
    const slotfive = slots[Math.floor(Math.random() * slots.length)];
    const slotsix = slots[Math.floor(Math.random() * slots.length)];
    const slotseven = slots[Math.floor(Math.random() * slots.length)];
    const sloteight = slots[Math.floor(Math.random() * slots.length)];
    const slotnine = slots[Math.floor(Math.random() * slots.length)];

    if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix || slotseven === sloteight && slotseven === slotnine) {

    let ganhoum = Math.floor(quantia * 3);

    dbref.update({
        real: db.val().real + ganhoum
    })
    dbref.update({
        real: db.val().real - quantia
    })

    const ganhou = new Discord.MessageEmbed()
    .setColor("#36393F")
    .setTitle("Casino La Sienna - Casa De Apostas.")
    .setDescription(`ㅤㅤㅤㅤㅤㅤﾠ${slotfour}|${slotfive}|${slotsix} \n ㅤㅤㅤㅤㅤㅤﾠ${slotOne}|${slotTwo}|${slotThree} \n ㅤㅤㅤㅤㅤㅤﾠ${slotseven}|${sloteight}|${slotnine}`)
    .setFooter(`Wow! ` + message.author.username + ` Parabéns você GANHOU ${ganhoum} Reais!`);

    message.channel.send(ganhou)
    } else {


    database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`)
    .once('value').then(async (db) => {
    dbref.update({
        real: db.val().real - quantia
    })
})

    const perdeu = new Discord.MessageEmbed()
    .setColor("#36393F")
    .setTitle("Casino La Sienna - Casa De Apostas.")
    .setDescription(`ㅤㅤㅤㅤㅤㅤﾠ${slotfour}|${slotfive}|${slotsix} \n ㅤㅤㅤㅤㅤㅤﾠ${slotOne}|${slotTwo}|${slotThree} \n ㅤㅤㅤㅤㅤㅤﾠ${slotseven}|${sloteight}|${slotnine}`)
    .setFooter("Awww " + message.author.username + " Você perdeu droga,tente denovo!");

    message.channel.send(perdeu)
    }
}