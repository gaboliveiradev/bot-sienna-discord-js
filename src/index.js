const Discord = require("discord.js");
const dotenv = require("dotenv");
const client = new Discord.Client()
const firebase = require("firebase");
dotenv.config();

//Firebase (Banco De Dados)

var firebaseConfig = {
    apiKey: "AIzaSyDhJ45I9cwfTsZT8VvMfAaQC9WAMN2YjkA",
    authDomain: "fir-sienna.firebaseapp.com",
    projectId: "fir-sienna",
    storageBucket: "fir-sienna.appspot.com",
    messagingSenderId: "163112385304",
    appId: "1:163112385304:web:e5a9afcd71954d4677fc6d"
};
//Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

//Status Do Bot

client.on("ready", () => {
    let activities = [
        `Use sn!help para ver os comandos.`,
        `${client.guilds.cache.size} servidores!`,
        `${client.users.cache.size} usuários!`
      ],
      i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "PLAYING"
        }), 1000 * 60); 
    client.user
        .setStatus("dnd")
        .catch(console.error);
        console.log(`---@Informações@---`)
        console.log(`-  Nome: ${client.user.username}   -`)
        console.log(`-  Servidores: ${client.guilds.cache.size}  -`)
        console.log(`-  Usuários: ${client.users.cache.size}    -`)
        console.log(`-  Canais: ${client.channels.cache.size}    -`)
        console.log(`-------------------`)
});

//Command Handler

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(process.env.PREFIX)) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    let canal = client.channels.cache.get("787468556085362742");
    let log = new Discord.MessageEmbed()
    .setColor("#36393F")
    .setDescription(`Comando executado: **${message.content}** \n Id Do Author: **${message.author.id}** \n Nickname Do Author: **${message.author.username}** \n Id Servidor Que Executaram o Comando: **${message.guild.id}** \n Nome Do Servidor Que Executaram o Comando: **${message.guild.name}**`)
    .setTimestamp()
    .setFooter(`Comando Executado: `)

    canal.send(log)

   const args = message.content.slice(process.env.PREFIX.length).split(" ");
   const command = args.shift().toLowerCase();

   try {
       const commandFile = require(`./commands/${command}.js`)
       commandFile.run(client, message, args, database);
    } catch (err) {
        console.error('Erro:' + err);
        return message.reply(`este comando não existe.`)
    }
});

//Responder ao mencionar o bot
client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    var embed = new Discord.MessageEmbed()
    .setColor("#FF1493")
    .setTitle("Olá meu nome é Sienna!")
    .setThumbnail("https://imgur.com/rPGybOt.png")
    .setDescription("[Me Convide Para Seu Servidor](https://discord.com/api/oauth2/authorize?client_id=779042753878425660&permissions=8&scope=bot) \n [Meu WebSite](https://imgur.com) \n [Servidor De Suporte](https://discord.gg/jbEymQmtkR) \n\n **Instagram Do Desenvolvedor** \n ```@gabrieloliveira6407``` \n **Meu Prefix** \n ```s!``` \n **Para Saber Meus Comandos Use:** \n ```s!help```")

      
    if (message.content.includes(`${client.user.id}`)) message.channel.send(embed).catch(err => {return});
});

//Login Token
client.login(process.env.TOKEN);