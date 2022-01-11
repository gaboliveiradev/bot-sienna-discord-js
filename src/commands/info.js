const Discord = require('discord.js')

exports.run = async function(client, message, args) {

    //Embed Principal
    const botinfo = new Discord.MessageEmbed()
    .setColor("#800080")
    .setTitle("Informações Do Bot")
    .setDescription("``Sobre`` \n o bot Sienna foi desenvolvido com o intuito de trazer entreterimentos para todos,porém a Sienna não é só isso.Nela você encontra comandos de economia,entreterimento,diversão,moderação e uteis. \n\n [Servidor De Suporte](https://discord.gg/aTMyhUDsDV) \n [Website Sienna](http://erikasarti.com/html/tabela-cores/) \n [Clique Para Me Adicionar](https://discord.com/api/oauth2/authorize?client_id=784630597821399072&permissions=8&scope=bot)")
    .setFooter("Page 1/2")
    .setTimestamp()

    let msg = await message.channel.send(botinfo)
        
    const emojis = ['⬅️', '➡️']

    emojis.forEach(async emoji => await msg.react(emoji))

    //Embed Secundaria
    let prog = new Discord.MessageEmbed()
    .setColor("#800080")
    .setTitle("Informações Progamação Do Bot")
    .setDescription("``Node.js`` \n O bot foi inteiramente programado em Node.js/Javascript \n\n ``Discord.js`` \n @discord.js 12.4.1 \n\n ``Visual Studio Code`` \n Bot foi programando pelo Visual Studio Code. \n\n ``Hospedagem`` \n Utilizamos uma VPS de 10GB para hospedar a Sienna e deixar-la 24 horas online. \n\n ``Firebase`` \n Utilizamos o banco de dados Firebase,um banco de dados totalmente ligado ao Google e constantemente atualizado. \n\n ``Created By Gabriel`` \n ©Todos os Direitos Reservados.")
    .setFooter("Page 2/2")
    .setTimestamp()

    const filter = (reaction, user) => emojis.includes(reaction.emoji.name) && user.id == message.author.id

    const embedChange = async (embedName) => {
        await msg.edit(embedName)
        msg.reactions.cache.forEach(r => r.users.remove(message.author))
    }

        const collector = msg.createReactionCollector(filter, {time: 5 * 60 * 1000})
        collector.on('collect', async r => {
            switch (r.emoji.name) {
                case '⬅️':
                    embedChange(botinfo)
                    break
                case '➡️':
                    embedChange(prog)
                    break
            }
        })

}