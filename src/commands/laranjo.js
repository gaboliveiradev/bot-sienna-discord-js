const Discord = require('discord.js')
const Jimp = require('jimp');

exports.run = async function(client, message, args, databse) {
     
    //Ler a Img
    Jimp.read("https://cdn.discordapp.com/attachments/745665022268539011/749290667812847646/laranjo.png").then(image => {
        //Escolher a Font Usada Na Imagem
        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
            //Ajustar o Tamanho Da Imagem
            image.resize(647, 467) //647 467
            //Colocar o Escrito Na Imagem
            image.print(font, 25, 75, args.join(" "), 1000)
            //Pro Nome Da Imagem
            image.getBuffer(Jimp.MIME_PNG, (err, i) => {
                message.channel.send({files: [{ attachment: i, name: "laranjo.png"}]});
            })
        })
    })
}
