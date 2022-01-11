const Discord = require('discord.js')

exports.run = async function(client, message, args, database) {

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function tirar(a, atual, quantia) {
        let calc = a - quantia
    		let resultado = ''
        let i = 0;
        for(i = 0 ; i < calc ; i++) {
          resultado = resultado + '<:h1:799291122945228820>';
        }
        return resultado
    }

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.reply(`mencione alguem que deseja tirar um x1.`)
    if(user.id == message.author.id) return message.reply(`você não pode batalhar com você mesmo.`)
    if(user.id == "784630597821399072") return message.reply(`você não pode batalhar com a Deusa da criação.`)

    let anuncX1 = new Discord.MessageEmbed()
    .setColor("#FF4500")
    .setDescription(`${message.author} convidou ${user} para tirar um x1.` + " Digite ``sim`` para aceitar o x1 ou ``não`` para negar o x1.Seja rápido,você tem 30 segundos para decidir aceitar ou negar.")
    let msg = await message.channel.send(anuncX1)

    let collector = new Discord.MessageCollector(message.channel, m => m.author.id === user.id, { time: 30000, max: 1 })
    collector.on("collect", m => {
        if(m.content.toLowerCase().includes('sim')) {
            collector.stop()
            start()
        } else if(m.content.toLowerCase().includes('não')) {
            collector.stop()
            let negou = new Discord.MessageEmbed()
            .setColor("#FF4500")
            .setDescription(`${user} negou o x1 contra ${message.author}`)
            msg.edit(negou)
        }
    })

    async function start() {
        let delay = 10;
        for (let i = 0; i < 10; i++) {
        await timeout(1000)
        if(delay == 0) {
          continue;
        } else {
        delay = delay - 1

        let avisoX1 = new Discord.MessageEmbed()
        .setColor("#FF4500")
        .setDescription(`${user} aceitou o x1 contra ${message.author}`)
        .setFooter(`A batalha entre os dois irá começar em: ${delay} segundos`)
        msg.edit(avisoX1)
            }
        }

        //Variaveis
        let player1 = `<@${message.author.id}>`;
        let player2 = `<@${user.id}>`;
        var life = 10;
        let v10 = `<:h1:799291122945228820>`.repeat(life)
        let vida1 = v10;
        let vida2 = v10;
        let a1 = life, a2 = life;

        let looser = ""
        let winner = ""
        await timeout(4000)

        //Array's
        var falas = [
            "Resengan...",
            "Kamehameha...",
            "Jutsu Clone Das Sombras...",
            "Smash...",
            "Jutsu De Rock Lee",
            "Chute De Pedra",
        ]
        var gifs = [
            "https://imgur.com/6J9Fklm.gif",
            "https://imgur.com/AHDVObR.gif",
            "https://imgur.com/A56S99T.gif",
            "https://imgur.com/Aj9XzSZ.gif",
            "https://imgur.com/j7Et2hL.gif",
            "https://imgur.com/PBpu512.gif",
        ]

        let dano = [2, 2, 5, 4, 6, life]
        let iniciando = new Discord.MessageEmbed()
        .setColor("#FF4500")
        .setDescription("Eles entraram no campo de batalha...")
        .addField(`**${user.user.username}**`, `[${vida1}]`, true)
        .addField(`**${message.author.username}**`, `[${vida2}]`, true)
        .setImage("https://imgur.com/RWaVZ60.gif")
        let msg1 = await message.channel.send(iniciando)

        let i = 0
        await timeout(2700);
        for(i = 0 ; i < 5 ; i++) {
        	
        	let rand = Math.floor(Math.random() * 2)

        	if(rand == 0) {
            a1 -= dano[i]
        		vida1 = tirar(a1, vida1, dano[i])
        	} else {
            a2 -= dano[i]
        		vida2 = tirar(a2, vida2, dano[i])
        	}
        	let lutando = new Discord.MessageEmbed()
    		.setTitle(`${falas[i]}`)
    		.setColor("#FF4500")
            .addField(`**${user.user.username}**`, `[${vida1}]`, true)
            .addField(`**${message.author.username}**`, `[${vida2}]`, true)
            .setImage(gifs[i])

    		msg1.edit(lutando);
          await timeout(4500)
        	if(vida1 == '' || vida2 == '') {
        		i = 8
        	}
        }
        let looserr;
        let w;
        if(vida1 == '') {
          w = player1
          looserr = player2
        }
        if(vida2 == '') {
          w = player2
          looserr = player1
        }

        let result = new Discord.MessageEmbed()
        .setColor("#FF4500")
        .setDescription(`${w} Venceu a batalha conta ${looserr}`)
        .setImage('https://imgur.com/z9sCByq.gif')
		msg1.edit(result) 
    }
}