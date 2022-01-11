const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async function(client, message, args, database) {

    //Função
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dbref = database.ref(`Sistemas/Economia/PetInfo/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Delay/BrincarPet/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db2ref = database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/PetInfo/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Delay/BrincarPet/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null || db2.val() == null) return message.channel.send(register)

    if(db.val().pet == false) return message.reply(`você não possui um pet.`)

    let imgPet = [db.val().imgPet]
    let name = [db.val().nome]
    let xpPet = [db.val().xpPet]
    let levelPet = [db.val().levelPet]
    let fomePet = [db.val().fomePet]

    let mostrarPet = new Discord.MessageEmbed()
    .setColor("#FFA500")
    .setDescription("Aqui está seu pet,logo abaixo você poderá ver as informações dele.Digite ``brincar`` no chat para brincar com seu pet, ou ``alimentar`` para dar comida ao seu pet.Para alimentar o seu pet você irá gastar ``10 golds``. \n\n " + ` Nome Do Pet: **${name}** \n Xp: **${xpPet}** \n Level: **${levelPet}** \n Fome: **${fomePet}%**`)
    .setImage(`${imgPet}`)

    let msg = await message.channel.send(mostrarPet)

    let collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });

    collector.on("collect", async(m) => {
        if(m.content.toLowerCase().includes('brincar')) {
            collector.stop()

            if(db.val().fomePet == 0) {
                dbref.update({
                    nome: "s!petname <nome>",
                    imgPet: "link.png",
                    xpPet: 0,
                    levelPet: 1,
                    pet: false,
                    fomePet: 100,
                })
                msg.delete()
        
                return message.reply(`seu pet morreu de fome :(`)
            }

            if (db1.val().delay !== null && 600000 - (Date.now() - db1.val().delay) > 0) {
                let time = ms(600000 - (Date.now() - db1.val().delay));
                let dl = new Discord.MessageEmbed()
                .setColor("#FF69B4")
                .setThumbnail("https://imgur.com/91GPuFR.png")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription(`Você já brincou com seu pet,tente novamente em: \n > **${time.minutes}m e ${time.seconds}s**`)
                return message.channel.send(dl) // Mensagem delay
            }
            db1ref.update({
                delay: Date.now()
            })

            let action = [
                `**${name}** está se divertindo com a bola de futebol...`,
                `**${name}** está fazendo gracinha para os outros...`,
            ]
            let action1 = [
                `Ooow **${name}** está se sujando todo na lama...`,
                `Acho que **${name}** arrumou uma namorada ein...`,
            ]

            //Aleatorizando
            let aleatorizarAction = action[Math.floor(Math.random() * action.length)]
            let aleatorizarAction1 = action1[Math.floor(Math.random() * action1.length)]

            //Brincando...
            let delay = 5;
            for (let i = 0; i < 5; i++) {
            msg.reactions.removeAll()
            await timeout(1000)
            if(delay == 0) {
              continue;
            } else {
            delay = delay - 1

            let brincando = new Discord.MessageEmbed()
            .setColor("#DC143C")
            .setDescription(`${aleatorizarAction}`)
            msg.edit(brincando)
                }
            }

            let delay1 = 5;
            for (let i = 0; i < 5; i++) {
            msg.reactions.removeAll()
            await timeout(1000)
            if(delay1 == 0) {
              continue;
            } else {
            delay1 = delay1 - 1

            let brincando1 = new Discord.MessageEmbed()
            .setColor("#DC143C")
            .setDescription(`${aleatorizarAction1}`)
            msg.edit(brincando1)
                }
            }

            let delay2= 5;
            for (let i = 0; i < 5; i++) {
            msg.reactions.removeAll()
            await timeout(1000)
            if(delay2 == 0) {
              continue;
            } else {
            delay2 = delay2 - 1

            let brincando2 = new Discord.MessageEmbed()
            .setColor("#DC143C")
            .setDescription(`**${name}** cansou, vamos embora...`)
            msg.edit(brincando2)
                }
            }

            let fomeG = 10;
            let xpG = Math.floor(Math.random() * 50) + 30;
            dbref.update({
                xpPet: db.val().xpPet + xpG,
                fomePet: db.val().fomePet - fomeG
            })

            let terminou = new Discord.MessageEmbed()
            .setColor("#DC143C")
            .setDescription(`Você brincou bastante com seu pet e ele ganhou **${xpG}xp**`)
            msg.edit(terminou)

            if (db.val().levelPet*1000 <= db.val().xpPet) {
                dbref.update({
                    levelPet: db.val().levelPet + 1,
                })

                message.reply(`seu pet upou de level,parabéns.`)
            }
        } else if(m.content.toLowerCase().includes('alimentar')) {
            collector.stop()
            let pay = 10
            if(db.val().fomePet == 100) return message.reply(`seu pet não está com fome agora.`)
            if(db2.val().gold < pay) return message.reply(`você não possui golds suficientes para alimentar seu pet.`)

            let delay= 5;
            for (let i = 0; i < 5; i++) {
            msg.reactions.removeAll()
            await timeout(1000)
            if(delay == 0) {
              continue;
            } else {
            delay = delay - 1

            let comendo = new Discord.MessageEmbed()
            .setColor("#DC143C")
            .setDescription(`**${name}** está comendo...`)
            msg.edit(comendo)
                }
            }

            let delay1= 5;
            for (let i = 0; i < 5; i++) {
            msg.reactions.removeAll()
            await timeout(1000)
            if(delay1 == 0) {
              continue;
            } else {
            delay1 = delay1 - 1

            let comendo1 = new Discord.MessageEmbed()
            .setColor("#DC143C")
            .setDescription(`**${name}** está fazendo suas necessidades...`)
            msg.edit(comendo1)
                }
            }

            let delay2 = 5;
            for (let i = 0; i < 5; i++) {
            msg.reactions.removeAll()
            await timeout(1000)
            if(delay2 == 0) {
              continue;
            } else {
            delay2 = delay2 - 1

            let comendo2 = new Discord.MessageEmbed()
            .setColor("#DC143C")
            .setDescription(`**${name}** está com o "panduco" cheio.`)
            msg.edit(comendo2)
                }
            }

            dbref.update({
                fomePet: 100,
            })
            db2ref.update({
                gold: db2.val().gold - pay
            })

            let Comeu = new Discord.MessageEmbed()
            .setColor("#DC143C")
            .setDescription(`Você pagou **10 golds** pela comida de **${name}**`)
            msg.edit(Comeu)
        }
    })
}