const Discord = require('discord.js')

exports.run = async function(client, message, args, database) {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!user) return message.reply(`mencione um usuário que deseja cancelar.`)

    let cancelar = [
        `${user} foi cancelado(a) por ser feio de mais.`,
        `${user} foi cancelado(a) por sequestrar lolis.`,
        `${user} foi cancelado(a) por comer um travesti e não pagar.`,
        `${user} foi cancelado(a) por ser bonito de mais.`,
        `${user} foi cancelado(a) por apoiar o bolsonaro.`,
        `${user} foi cancelado(a) por ser ptista.`,
        `${user} foi cancelado(a) por roubar lolis.`,
        `${user} foi cancelado(a) por se apaixonar pela pessoa errada.`,
        `${user} foi cancelado(a) por ter mais de um namorado(a).`,
        `${user} foi cancelado(a) por não gostar do zoio mermão.`,
        `${user} foi cancelado(a) por não fumar com o aleki fumaça.`,
        `${user} foi cancelado(a) por não saber fazer miojo,`,
        `${user} foi cancelado(a) por gostar de anime`,
        `${user} foi cancelado(a) por não comer um travesti.`,
        `${user} foi cancelado(a) por ser hetero top.`,
        `${user} foi cancelado(a) por respirar,ninguem gosta de você.`,
        `${user} foi cancelado(a) por cantar "lindo" de mais.`,
        `${user} foi cancelado(a) por não liberar o c*zinho para mim.`,
        `${user} foi cancelado(a) por por existir.`,
        `${user} foi cancelado(a) por ser playboy`,
        `${user} foi cancelado(a) por ser fazendeiro nutela.`,
        `${user} foi cancelado(a) por usar tiktok.`,
    ]

    let aleatorizar = cancelar[Math.floor(Math.random() * cancelar.length)];

    return message.reply(`${aleatorizar}`)

}