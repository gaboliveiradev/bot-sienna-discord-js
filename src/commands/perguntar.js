const Discord = require("discord.js");

exports.run = (client, message, args, database) => {

const respostas = [
        "Sim" ,
        "Não" ,
        "Definitivamente sim" ,
        "Definitivamente não",
        "Absolutamente sim" ,
        "Absolutamente não",
        "Vai Encher outra pessoa!" ,
        "Prefiro não responder"
]

var pergunta = args.slice(0).join(" ");
if(!pergunta) return message.channel.send(`${message.author} Me pergunte algo`)
var res = respostas[Math.floor(Math.random() * respostas.length)];

   message.reply(res)
}