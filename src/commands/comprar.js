const Discord = require("discord.js");

exports.run = async function(client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dbref = database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/PetInfo/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/PetInfo/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null) return message.channel.send(register)

    if(message.content.toLowerCase().includes('pet')) {
        let PetShop = new Discord.MessageEmbed()
        .setColor("#8A2BE2")
        .setTitle("🐺 PetShop Sienna.")
        .setDescription("Para comprar seu pet reaja no emoji abaixo correspondende ao pet que deseja comprar.Lembre-se pets tem ``gastos`` então tome uma saiba decisão.")
        .setThumbnail("https://imgur.com/fKWjLUb.png")
        .addFields([
            {name: "<:Dog:798615733671559258>Dog", value: "1200 Golds", inline: true},
            {name: "<:Vaca:798615735945003038>Vaquinha", value: " 1400 Golds", inline: true},
            {name: "<:Porco:798615735839621140>Porquin", value: "1550 Golds", inline: true},
            {name: "<:Baiacu:798615736133222430>Baiacu", value: "1700 Golds", inline: true},
            {name: "<:Pikachu:798615733986394132>Pikachu", value: "1950 Golds", inline: true},
            {name: "<:BabyDragon:798615736041209856>BabyDragon", value: "2200 Golds", inline: true},
            {name: "<:Patin:798615736078958623>Patin", value: "2500 Golds", inline: true},
            {name: "<:Stitch:798615735492542526>Stitch", value: "3100 Golds", inline: true},
            {name: "<:BabyYoda:798617727106678825>BabyYoda", value: "4200 Golds", inline: true},
            {name: "ㅤ", value: "ㅤ", inline: true},
            {name: "<:LuckyBlock:798979080468693012>Random", value: "5000 Golds", inline: true},
            {name: "ㅤ", value: "ㅤ", inline: true},
        ])
    
        let msg = await message.channel.send(PetShop)
        const emojis = [
            "798615733671559258",
            "798615735945003038",
            "798615735839621140",
            "798615736133222430",
            "798615733986394132",
            "798615736041209856",
            "798615736078958623",
            "798615735492542526",
            "798617727106678825",
            "798979080468693012",
        ]
        emojis.forEach(async emoji => await msg.react(emoji))

        const filter = (reaction, user) => emojis.includes(reaction.emoji.id) && user.id == message.author.id
        const collector = msg.createReactionCollector(filter, {time: 30000})

        collector.on('collect', async r => {
            switch (r.emoji.id) {
                case '798615733671559258':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 1200) return message.reply(`você não possui golds suficientes.`)
                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 1200
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: "https://imgur.com/4YCJFoY.png",
                    })

                    msg.reactions.removeAll()
                    let Comprou = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **Dog** \n Valor: **1200 Golds**")

                    msg.edit(Comprou)
                    break;
                case '798615735945003038':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 1400) return message.reply(`você não possui golds suficientes.`)
                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 1400
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: "https://imgur.com/Ygmg7cy.png",
                    })

                    msg.reactions.removeAll()
                    let Comprou1 = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **Vaquinha** \n Valor: **1400 Golds**")

                    msg.edit(Comprou1)
                    break;
                case '798615735839621140':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 1550) return message.reply(`você não possui golds suficientes.`)
                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 1550
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: "https://imgur.com/5JhbCpO.png",
                    })

                    msg.reactions.removeAll()
                    let Comprou2 = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **Porquinho** \n Valor: **1550 Golds**")

                    msg.edit(Comprou2)
                    break;
                case '798615736133222430':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 1700) return message.reply(`você não possui golds suficientes.`)
                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 1700
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: "https://imgur.com/GDV1HMY.png",
                    })

                    msg.reactions.removeAll()
                    let Comprou3 = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **Baiacu** \n Valor: **1700 Golds**")

                    msg.edit(Comprou3)
                    break;
                case '798615733986394132':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 1950) return message.reply(`você não possui golds suficientes.`)
                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 1950
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: "https://imgur.com/yjVpayF.png",
                    })

                    msg.reactions.removeAll()
                    let Comprou4 = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **Pikachu** \n Valor: **1950 Golds**")

                    msg.edit(Comprou4)
                    break;
                case '798615736041209856':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 2200) return message.reply(`você não possui golds suficientes.`)
                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 2200
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: "https://imgur.com/M5K8sKH.png",
                    })

                    msg.reactions.removeAll()
                    let Comprou5 = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **BabyDragon** \n Valor: **2200 Golds**")

                    msg.edit(Comprou5)
                    break;
                case '798615736078958623':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 2500) return message.reply(`você não possui golds suficientes.`)
                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 2500
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: "https://imgur.com/lHEgeC0.png",
                    })

                    msg.reactions.removeAll()
                    let Comprou6 = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **Patin** \n Valor: **2500 Golds**")

                    msg.edit(Comprou6)
                    break;
                case '798615735492542526':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 3100) return message.reply(`você não possui golds suficientes.`)
                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 3100
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: "https://imgur.com/wpxLzMZ.png",
                    })

                    msg.reactions.removeAll()
                    let Comprou7 = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **Stitch** \n Valor: **3100 Golds**")

                    msg.edit(Comprou7)
                    break;
                case '798617727106678825':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 4200) return message.reply(`você não possui golds suficientes.`)
                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 4200
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: "https://imgur.com/s9sRWOd.png",
                    })

                    msg.reactions.removeAll()
                    let Comprou8 = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **BabyYoda** \n Valor: **4200 Golds**")

                    msg.edit(Comprou8)
                    break;
                case '798979080468693012':
                    //Verificações
                    if(db1.val().pet == true) return message.reply(`você já possui um pet.`)
                    if(db.val().gold < 5000) return message.reply(`você não possui golds suficientes.`)

                    let Pet = [
                        "https://imgur.com/4YCJFoY.png",
                        "https://imgur.com/Ygmg7cy.png",
                        "https://imgur.com/5JhbCpO.png",
                        "https://imgur.com/GDV1HMY.png",
                        "https://imgur.com/yjVpayF.png",
                        "https://imgur.com/M5K8sKH.png",
                        "https://imgur.com/lHEgeC0.png",
                        "https://imgur.com/wpxLzMZ.png",
                        "https://imgur.com/s9sRWOd.png",
                    ]
                    let randomPet = Pet[Math.floor(Math.random() * Pet.length)];

                    //Atualizar Database
                    dbref.update({
                        gold: db.val().gold - 5000
                    })
                    db1ref.update({
                        pet: true,
                        imgPet: randomPet,
                    })

                    msg.reactions.removeAll()
                    let Comprou9 = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setThumbnail("https://imgur.com/fKWjLUb.png")
                    .setDescription("Você comprou um pet cuide bem dele.Para dar um nome ao seu pet use ``s!petname <nome>`` para ver o pet use ``s!pet``.Lembre-se de dar ``comida`` ao seu pet para ele não ``morrer`` de fome.Conforme seu pet for ``upando de leveis`` ele irá ganhando habilidades. \n\n Raça: **???** \n Valor: **5000 Golds**")

                    msg.edit(Comprou9)
                    break;
            }
        });

    }
}