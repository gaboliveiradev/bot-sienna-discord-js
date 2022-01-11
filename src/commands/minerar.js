const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async function(client, message, args, database) {

  let register = new Discord.MessageEmbed()
  .setColor("#483D8B")
  .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
  .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dltime = 7200000
    let dltimebtc = 7200000
    let dbref = database.ref(`Sistemas/Economia/Mochila/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Delay/Minerar/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Mochila/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Delay/Minerar/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Delay/MinerarBTC/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db3 = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db4 = await database.ref(`Sistemas/Economia/Computador/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db5 = await database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null || db2.val() == null || db3.val() == null || db4.val() == null) return message.channel.send(register)

    let percCarvão = 50;
    let percFerro = 40;
    let percOuro = 30;
    let percDiamante = 20;
    let percRubi = 10;
    let percEsmeralda = 5;
    let percItemRaro = 1;

    //Minerar BTC
    let db2ref = database.ref(`Sistemas/Economia/Delay/MinerarBTC/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db3ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db4ref = database.ref(`Sistemas/Economia/Computador/Servidor:${message.guild.id}/User:${message.author.id}`);

    if(message.content.toLowerCase().includes('btc') || message.content.toLowerCase().includes('bitcoin')) {

        if(db4.val().computador == false) return message.reply(`você precisa comprar um computador para minerar bitcoin.`)
        if(db4.val().gpu == false) return message.reply(`você precisa comprar uma placa de vídeo para minerar bitcoin.`)
        if (db2.val().delay !== null && dltimebtc - (Date.now() - db2.val().delay) > 0) {
            let time = ms(dltimebtc - (Date.now() - db2.val().delay));
            let dl = new Discord.MessageEmbed()
            .setColor("#FF69B4")
            .setThumbnail("https://imgur.com/91GPuFR.png")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription(`Você já minerou bitcoin,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
            return message.reply(dl) // Mensagem delay
        }

        let aviMinerarBTC = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription("Você esta prestes a começar a minerar bitcoin,mas antes você precisa ligar seu computador digite ``ligar`` para ligar o computador e começar a minerar bitcoin.")
        let msg1 = await message.channel.send(aviMinerarBTC)

        let collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
        collector2.on('collect', async(m) => {
            if(m.content.toLowerCase().includes('ligar')) {
                collector2.stop()
                if (db2.val().delay !== null && dltimebtc - (Date.now() - db2.val().delay) > 0) {
                    let time = ms(dltimebtc - (Date.now() - db2.val().delay));
                    let dl = new Discord.MessageEmbed()
                    .setColor("#FF69B4")
                    .setThumbnail("https://imgur.com/91GPuFR.png")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setDescription(`Você já minerou bitcoin,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
                    return message.reply(dl) // Mensagem delay
                }
                db2ref.update({
                    delay: Date.now(),
                })

                let quebrarGTX = 5;
                if(verify_percent(quebrarGTX)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Ligando computador...")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Atualizações necessarias,porfavor não desligue o computador...")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Computador ligado com sucesso.")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Iniciando mineração de bitcoin...")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay4 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay4 == 0) {
                      continue;
                    } else {
                    delay4 = delay4 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 10%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay5 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay5 == 0) {
                      continue;
                    } else {
                    delay5 = delay5 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 23%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay6 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay6 == 0) {
                      continue;
                    } else {
                    delay6 = delay6 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 31%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay7 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay7 == 0) {
                      continue;
                    } else {
                    delay7 = delay7 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 37%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay8 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay8 == 0) {
                      continue;
                    } else {
                    delay8 = delay8 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 45%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay9 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay9 == 0) {
                      continue;
                    } else {
                    delay9 = delay8 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 52%")
                    msg1.edit(minbtc)
                        }
                    }

                    let quebrouGTX = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setDescription("Sua placa de vídeo rtx 3090 foi obstruida no processo de mineração,caso queire continuar a minerar bitcoin você irá ter que comprar outra placa de vídeo.")
                    msg1.edit(quebrouGTX)

                    db4ref.update({
                        gpu: false
                    })
                } else {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Ligando computador...")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Atualizações necessarias,porfavor não desligue o computador...")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Computador ligado com sucesso.")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Iniciando mineração de bitcoin...")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay4 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay4 == 0) {
                      continue;
                    } else {
                    delay4 = delay4 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 10%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay5 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay5 == 0) {
                      continue;
                    } else {
                    delay5 = delay5 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 23%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay6 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay6 == 0) {
                      continue;
                    } else {
                    delay6 = delay6 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 31%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay7 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay7 == 0) {
                      continue;
                    } else {
                    delay7 = delay7 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 37%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay8 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay8 == 0) {
                      continue;
                    } else {
                    delay8 = delay8 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 45%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay9 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay9 == 0) {
                      continue;
                    } else {
                    delay9 = delay8 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 52%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay10 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay10 == 0) {
                      continue;
                    } else {
                    delay10 = delay10 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 58%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay11 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay11 == 0) {
                      continue;
                    } else {
                    delay11 = delay11 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 69%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay12 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay12 == 0) {
                      continue;
                    } else {
                    delay12 = delay12 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 76%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay13 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay13 == 0) {
                      continue;
                    } else {
                    delay13 = delay13 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 83%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay14 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay14 == 0) {
                      continue;
                    } else {
                    delay14 = delay14 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 88%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay15 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay15 == 0) {
                      continue;
                    } else {
                    delay15 = delay15 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 94%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay16 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay16 == 0) {
                      continue;
                    } else {
                    delay16 = delay16 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("Mineração em 99%")
                    msg1.edit(minbtc)
                        }
                    }
            
                    let delay17 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay17 == 0) {
                      continue;
                    } else {
                    delay17 = delay17 - 1
            
                    let minbtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setDescription("**Mineração concluida com sucesso.**")
                    msg1.edit(minbtc)
                        }
                    }

                    let bitcoin = Math.random().toFixed(32); // Pega os 2 primeiros números do Math.random()

                    bitcoin = bitcoin.replace('0.', ''); // Tira o 0. 
            
                    bitcoin = `0.00${bitcoin}` // Transforma em uma string
            
                    bitcoin = parseFloat(bitcoin) //Trasforma a string em número normal

                    db3ref.update({
                        btc: db3.val().btc + bitcoin,
                    })
            
                    let mineroubtc = new Discord.MessageEmbed()
                    .setColor("#FFFF00")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/gqM47dj.png")
                    .setDescription(`Você deixou seu computador ligado por varias horas minerando enquanto você assitia uns videozin e conseguiu: \n > **฿${bitcoin}**`)
                    msg1.edit(mineroubtc)
                }
            }
        })


    
    } else {
        //Minerar Minérios
        if(db5.val().pick == false) return message.reply(`você precisa de uma picareta para minerar.`)
        if (db1.val().delay !== null && dltime - (Date.now() - db1.val().delay) > 0) {
            let time = ms(dltime - (Date.now() - db1.val().delay));
            let dl = new Discord.MessageEmbed()
            .setColor("#FF69B4")
            .setThumbnail("https://imgur.com/91GPuFR.png")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription(`Você já minerou nessa caverna,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
            return message.reply(dl) // Mensagem delay
        }

        let avisMinerar = new Discord.MessageEmbed()
        .setColor("#556B2F")
        .setDescription("Você saiu nesse belo dia de sol para dar um passeio e acabou encontrando uma caverna,digite ``minerar`` para começar minerar e encontrar minérios valiosos. \n\n <:Coal_Sienna:799831898108198923>Carvão: **50%** \n <:Iron_Sienna:799831897227132988>Ferro: **40%** \n <:Gold_Sienna:799831896678465568>Ouro: **30%** \n <:Diamond_Sienna:799831896380014593>Diamante: **20%** \n <:Ruby_Sienna:799831914831282248>Rubi: **10%** \n <:Emerald_Sienna:799831914729963532>Esmeralda: **5%** \n <:Coroa_Sienna:800737122566668328>Item Raro: **1%**")
        message.channel.send(avisMinerar)

        let collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
        collector.on('collect', async(m) => {
            if(m.content.toLowerCase().includes('minerar')) {
    
                collector.stop()
                start()
                db1ref.update({
                    delay: Date.now()
                })
            }
        })
    }

    async function start() {

        let cavernas = new Discord.MessageEmbed()
        .setColor("#556B2F")
        .setDescription("Existem 3 tipos de cavernas nesse lugar,escolha uma.Digite ``caverna-revoada`` para escolher a primeira caverna,ou ``caverna-das-cobras`` para escolher a segunda caverna ou ``caverna-sombria`` para escolher a ultima caverna.")
        .setAuthor(message.author.username, message.author.avatarURL())
        let msg = await message.channel.send(cavernas)

        let collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
        collector1.on('collect', async(m) => {

            let oreGerar = Math.floor(Math.random() * 30 - 20) + 20;
            let rare = 5000;

            if(m.content.toLowerCase().includes('caverna-revoada')) {
                if(verify_percent(percCarvão)) {
                    
                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        carvão: db.val().carvão + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/JUQfa6n.png")
                    .setDescription(`Você foi minerar na Caverna Revoada,umas das caverna mais loucas do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Carvões**`)
                    msg.edit(minerou)

                } else if(verify_percent(percFerro)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        ferro: db.val().ferro + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/sXGv0Ll.png")
                    .setDescription(`Você foi minerar na Caverna Revoada,umas das caverna mais loucas do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Ferros**`)
                    msg.edit(minerou)

                } else if(verify_percent(percOuro)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        ouro: db.val().ouro + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/C1dtHJy.png")
                    .setDescription(`Você foi minerar na Caverna Revoada,umas das caverna mais loucas do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Ouros**`)
                    msg.edit(minerou)

                } else if(verify_percent(percDiamante)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        diamante: db.val().diamante + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/FrDhBgy.png")
                    .setDescription(`Você foi minerar na Caverna Revoada,umas das caverna mais loucas do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Diamantes**`)
                    msg.edit(minerou)

                } else if(verify_percent(percRubi)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        rubi: db.val().rubi + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/6vxVJ9d.png")
                    .setDescription(`Você foi minerar na Caverna Revoada,umas das caverna mais loucas do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Rubi**`)
                    msg.edit(minerou)

                } else if(verify_percent(percEsmeralda)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        esmeralda: db.val().esmeralda + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/KirrCbH.png")
                    .setDescription(`Você foi minerar na Caverna Revoada,umas das caverna mais lokas do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Esmeraldas**`)
                    msg.edit(minerou)

                } else if(verify_percent(percItemRaro)) {
                
                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }

                    let itens = [
                        "anel de diamantes da rainha elizabete",
                        "sarcófago banhado a ouro do rei do egito",
                        "a primeira carta enviada da rainha elizabete para o véio da havan",
                        "a primeira foto que o véio da havan tirou com os deuses gregos",
                        "a roupa que o faraó utilizada em dias importantes",
                        "o sangue do deus do egito",
                    ]

                    
                    let aleatorizar = itens[Math.floor(Math.random() * itens.length)];

                    db3ref.update({
                        real: db3.val().real + rare,
                    })



                    let itemRaro = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/mbRcQB8.png")
                    .setDescription(`Você foi minerar na Caverna Revoada,uma das cavernas mais loucas do mundo.Você minerou e encontrou ${aleatorizar} e conseguiu vender por: \n > **R$${rare}**`)
                    msg.edit(itemRaro)
                }
            } else if(m.content.toLowerCase().includes('caverna-sombria')) {

                if(verify_percent(percCarvão)) {
                    
                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        carvão: db.val().carvão + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/JUQfa6n.png")
                    .setDescription(`Você foi minerar na Caverna Sombria,uma das cavernas mais assustadoras do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Carvões**`)
                    msg.edit(minerou)

                } else if(verify_percent(percFerro)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        ferro: db.val().ferro + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/sXGv0Ll.png")
                    .setDescription(`Você foi minerar na Caverna Sombria,uma das cavernas mais assustadoras do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Ferros**`)
                    msg.edit(minerou)

                } else if(verify_percent(percOuro)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        ouro: db.val().ouro + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/C1dtHJy.png")
                    .setDescription(`Você foi minerar na Caverna Sombria,uma das cavernas mais assustadoras do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Ouros**`)
                    msg.edit(minerou)

                } else if(verify_percent(percDiamante)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        diamante: db.val().diamante + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/FrDhBgy.png")
                    .setDescription(`Você foi minerar na Caverna Sombria,uma das cavernas mais assustadoras do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Diamantes**`)
                    msg.edit(minerou)

                } else if(verify_percent(percRubi)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        rubi: db.val().rubi + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/6vxVJ9d.png")
                    .setDescription(`Você foi minerar na Caverna Sombria,uma das cavernas mais assustadoras do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Rubi**`)
                    msg.edit(minerou)

                } else if(verify_percent(percEsmeralda)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        esmeralda: db.val().esmeralda + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/KirrCbH.png")
                    .setDescription(`Você foi minerar na Caverna Sombria,uma das cavernas mais assustadoras do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Esmeraldas**`)
                    msg.edit(minerou)

                } else if(verify_percent(percItemRaro)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }

                    let itens = [
                        "anel de diamantes da rainha elizabete",
                        "sarcófago banhado a ouro do rei do egito",
                        "a primeira carta enviada da rainha elizabete para o véio da havan",
                        "a primeira foto que o véio da havan tirou com os deuses gregos",
                        "a roupa que o faraó utilizada em dias importantes",
                        "o sangue do deus do egito",
                    ]

                    
                    let aleatorizar = itens[Math.floor(Math.random() * itens.length)];

                    db3ref.update({
                        real: db3.val().real + rare,
                    })



                    let itemRaro = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/mbRcQB8.png")
                    .setDescription(`Você foi minerar na Caverna Sombria,uma das cavernas mais assustadoras do mundo.Você minerou e encontrou ${aleatorizar} e conseguiu vender por: \n > **R$${rare}**`)
                    msg.edit(itemRaro)

                }
            } else if(m.content.toLowerCase().includes('caverna-das-cobras')) {

                if(verify_percent(percCarvão)) {
                    
                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        carvão: db.val().carvão + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/JUQfa6n.png")
                    .setDescription(`Você foi minerar na Caverna Das Cobras,umas das cavernas mais peçonheta do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Carvões**`)
                    msg.edit(minerou)

                } else if(verify_percent(percFerro)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        ferro: db.val().ferro + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/sXGv0Ll.png")
                    .setDescription(`Você foi minerar na Caverna Das Cobras,umas das cavernas mais peçonheta do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Ferros**`)
                    msg.edit(minerou)

                } else if(verify_percent(percOuro)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        ouro: db.val().ouro + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/C1dtHJy.png")
                    .setDescription(`Você foi minerar na Caverna Das Cobras,umas das cavernas mais peçonheta do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Ouros**`)
                    msg.edit(minerou)

                } else if(verify_percent(percDiamante)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        diamante: db.val().diamante + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/FrDhBgy.png")
                    .setDescription(`Você foi minerar na Caverna Das Cobras,umas das cavernas mais peçonheta do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Diamantes**`)
                    msg.edit(minerou)

                } else if(verify_percent(percRubi)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        rubi: db.val().rubi + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/6vxVJ9d.png")
                    .setDescription(`Você foi minerar na Caverna Das Cobras,umas das cavernas mais peçonheta do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Rubi**`)
                    msg.edit(minerou)

                } else if(verify_percent(percEsmeralda)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }
 
                    dbref.update({
                        esmeralda: db.val().esmeralda + oreGerar,
                    })

                    let minerou = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/KirrCbH.png")
                    .setDescription(`Você foi minerar na Caverna Das Cobras,umas das cavernas mais peçonheta do mundo.Você minerou por muito tempo e conseguiu encontrar: \n > **${oreGerar} Esmeraldas**`)
                    msg.edit(minerou)

                } else if(verify_percent(percItemRaro)) {

                    let delay = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay == 0) {
                      continue;
                    } else {
                    delay = delay - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Entrando na caverna...")
                    msg.edit(minerando)
                        }
                    }

                    let delay1 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay1 == 0) {
                      continue;
                    } else {
                    delay1 = delay1 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Começando a minerar...")
                    msg.edit(minerando)
                        }
                    }

                    let delay2 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay2 == 0) {
                      continue;
                    } else {
                    delay2 = delay2 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Quebrando os pedregulhos...")
                    msg.edit(minerando)
                        }
                    }

                    let delay3 = 3;
                    for (let i = 0; i < 3; i++) {
                    await timeout(1000)
                    if(delay3 == 0) {
                      continue;
                    } else {
                    delay3 = delay3 - 1
            
                    let minerando = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setDescription("Opa,acho que encontrei algo aqui...")
                    msg.edit(minerando)
                        }
                    }

                    let itens = [
                        "anel de diamantes da rainha elizabete",
                        "sarcófago banhado a ouro do rei do egito",
                        "a primeira carta enviada da rainha elizabete para o véio da havan",
                        "a primeira foto que o véio da havan tirou com os deuses gregos",
                        "a roupa que o faraó utilizada em dias importantes",
                        "o sangue do deus do egito",
                    ]

                    
                    let aleatorizar = itens[Math.floor(Math.random() * itens.length)];

                    db3ref.update({
                        real: db3.val().real + rare,
                    })



                    let itemRaro = new Discord.MessageEmbed()
                    .setColor("#556B2F")
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setThumbnail("https://imgur.com/mbRcQB8.png")
                    .setDescription(`Você foi minerar na Caverna Das Cobras,uma das cavernas mais peçonhetas do mundo.Você minerou e encontrou ${aleatorizar} e conseguiu vender por: \n > **R$${rare}**`)
                    msg.edit(itemRaro)

                }
            }
        })
    }
                

    //Function Porcentagem
    function verify_percent(percent) {
        if(`${percent}`.length < 2) {
            percent = '0.0' + percent
        } else {
            percent = '0.' + percent
        }
        percent = parseFloat(percent);
        var random_boolean = Math.random() < percent;
        return random_boolean;
    } 
    //Function Timeout
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}