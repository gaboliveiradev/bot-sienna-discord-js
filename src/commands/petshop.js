const Discord = require("discord.js")

exports.run = async function(client, message, args, database) {

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let dbref = database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Gold/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null) return message.channel.send(register)

    let PetShop = new Discord.MessageEmbed()
    .setColor("#8A2BE2")
    .setTitle("🐺 PetShop Sienna.")
    .setThumbnail("https://imgur.com/fKWjLUb.png")
    .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet.")
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

    let collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 600000 });
    collector.on("collect", m => {
        if(m.content.toLowerCase().includes("dog")) {
            m.delete();
            let dog = new Discord.MessageEmbed()
            .setColor("#8A2BE2")
            .setTitle("🐺 PetShop Sienna.")
            .setImage("https://imgur.com/4YCJFoY.png")
            .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet. \n\n Pet: **Dog** \n Valor: **1200 Golds**")
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
            msg.edit(dog)
        } else {
            if(m.content.toLowerCase().includes("vaquinha") || m.content.toLowerCase().includes("vaca")) {
                m.delete();
                let vaca = new Discord.MessageEmbed()
                .setColor("#8A2BE2")
                .setTitle("🐺 PetShop Sienna.")
                .setImage("https://imgur.com/Ygmg7cy.png")
                .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet. \n\n Pet: **Vaquinha** \n Valor: **1400 Golds**")
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
                msg.edit(vaca)
            } else {
                if(m.content.toLowerCase().includes("porquin") || m.content.toLowerCase().includes("porco")) {
                    m.delete();
                    let porco = new Discord.MessageEmbed()
                    .setColor("#8A2BE2")
                    .setTitle("🐺 PetShop Sienna.")
                    .setImage("https://imgur.com/5JhbCpO.png")
                    .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet. \n\n Pet: **Porquin** \n Valor: **1550 Golds**")
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
                    msg.edit(porco)
                } else {
                    if(m.content.toLowerCase().includes("baiacu")) {
                        m.delete();
                        let baiacu = new Discord.MessageEmbed()
                        .setColor("#8A2BE2")
                        .setTitle("🐺 PetShop Sienna.")
                        .setImage("https://imgur.com/GDV1HMY.png")
                        .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet. \n\n Pet: **Baiacu** \n Valor: **1700 Golds**")
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
                        msg.edit(baiacu)
                    } else {
                        if(m.content.toLowerCase().includes("pikachu")) {
                            m.delete();
                            let pikachu = new Discord.MessageEmbed()
                            .setColor("#8A2BE2")
                            .setTitle("🐺 PetShop Sienna.")
                            .setImage("https://imgur.com/yjVpayF.png")
                            .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet. \n\n Pet: **Pikachu** \n Valor: **1950 Golds**")
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
                            msg.edit(pikachu)
                        } else {
                            if(m.content.toLowerCase().includes("babydragon")) {
                                m.delete();
                                let babydragon = new Discord.MessageEmbed()
                                .setColor("#8A2BE2")
                                .setTitle("🐺 PetShop Sienna.")
                                .setImage("https://imgur.com/M5K8sKH.png")
                                .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet. \n\n Pet: **BabyDragon** \n Valor: **2200 Golds**")
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
                                msg.edit(babydragon)
                            } else {
                                if(m.content.toLowerCase().includes("patin")) {
                                    m.delete();
                                    let patin = new Discord.MessageEmbed()
                                    .setColor("#8A2BE2")
                                    .setTitle("🐺 PetShop Sienna.")
                                    .setImage("https://imgur.com/lHEgeC0.png")
                                    .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet. \n\n Pet: **Patin** \n Valor: **2500 Golds**")
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
                                    msg.edit(patin)
                                } else {
                                    if(m.content.toLowerCase().includes("stitch")) {
                                        m.delete();
                                        let stitch = new Discord.MessageEmbed()
                                        .setColor("#8A2BE2")
                                        .setTitle("🐺 PetShop Sienna.")
                                        .setImage("https://imgur.com/wpxLzMZ.png")
                                        .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet. \n\n Pet: **Stitch** \n Valor: **3100 Golds**")
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
                                        msg.edit(stitch)
                                    } else {
                                        if(m.content.toLowerCase().includes("babyyoda")) {
                                            m.delete();
                                            let babyyoda = new Discord.MessageEmbed()
                                            .setColor("#8A2BE2")
                                            .setTitle("🐺 PetShop Sienna.")
                                            .setImage("https://imgur.com/s9sRWOd.png")
                                            .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet. \n\n Pet: **BabyYoda** \n Valor: **4200 Golds**")
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
                                            msg.edit(babyyoda)
                                        } else {
                                           if(m.content.toLowerCase().includes("back")) {
                                               m.delete();
                                               let PetShop = new Discord.MessageEmbed()
                                               .setColor("#8A2BE2")
                                               .setTitle("🐺 PetShop Sienna.")
                                               .setThumbnail("https://imgur.com/fKWjLUb.png")
                                               .setDescription("Digite o ``nome do pet`` para ver a foto dele antes de comprar.Digite ``s!comprar pet`` para adotar um pet,utilize ``s!petname <nome>`` para dar um nome ao seu pet e use ``s!pet`` para ver seu pet.")
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
                                               msg.edit(PetShop)
                                           } 
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}