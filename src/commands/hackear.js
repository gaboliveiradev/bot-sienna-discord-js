const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async function(client, message, args, database) {

    //Function timeout
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")
    
    let dltime = 14400000;
    let dbref = database.ref(`Sistemas/Economia/Delay/Hackear/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db1ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Delay/Hackear/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null || db1.val() == null) return message.channel.send(register)

    //Delay
    if (db.val().delay !== null && dltime - (Date.now() - db.val().delay) > 0) {
        let time = ms(dltime - (Date.now() - db.val().delay));
        let dl = new Discord.MessageEmbed()
        .setColor("#FF69B4")
        .setThumbnail("https://imgur.com/91GPuFR.png")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você já hackeou o banco central,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
        return message.reply(dl) // Mensagem delay
    }

    let chance = 60;

    let avisHack = new Discord.MessageEmbed()
    .setColor("#228B22")
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription("Você está prestes a hackear o sistema do banco central e roubar dados importantes sobre o governo.Digite ``hackear`` no chat para começar a hackear o sistema de segurança do banco central.")
    let msg = await message.channel.send(avisHack)

    let collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
    collector.on("collect", async(m) => {
        if(m.content.toLowerCase().includes('hackear')) {
            if (db.val().delay !== null && dltime - (Date.now() - db.val().delay) > 0) {
                let time = ms(dltime - (Date.now() - db.val().delay));
                let dl = new Discord.MessageEmbed()
                .setColor("#FF69B4")
                .setThumbnail("https://imgur.com/91GPuFR.png")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription(`Você já hackeou o banco central,tente novamente em: \n > **${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
                return message.reply(dl) // Mensagem delay
            }
            dbref.update({
                delay: Date.now()
            })    

            collector.stop()
            start()
        }
    })

    async function start() {

        if(verify_percent(chance)) {

            let delay = 3;
            for (let i = 0; i < 3; i++) {
            await timeout(1000)
            if(delay == 0) {
              continue;
            } else {
            delay = delay - 1
    
            let hackeando = new Discord.MessageEmbed()
            .setColor("#228B22")
            .setDescription("Entrando no sistema do banco central...")
            msg.edit(hackeando)
                }
            }
    
            let delay1 = 3;
            for (let i = 0; i < 3; i++) {
            await timeout(1000)
            if(delay1 == 0) {
              continue;
            } else {
            delay1 = delay1 - 1
    
            let hackeando1 = new Discord.MessageEmbed()
            .setColor("#228B22")
            .setDescription("Localizando uma falha na segurança...")
            msg.edit(hackeando1)
                }
            }
    
            let delay2 = 3;
            for (let i = 0; i < 3; i++) {
            await timeout(1000)
            if(delay2 == 0) {
              continue;
            } else {
            delay2 = delay2 - 1
    
            let hackeando2 = new Discord.MessageEmbed()
            .setColor("#228B22")
            .setDescription("Falha na segurança encontrada,invadindo...")
            msg.edit(hackeando2)
                }
            }
    
            let delay3 = 3;
            for (let i = 0; i < 3; i++) {
            await timeout(1000)
            if(delay3 == 0) {
              continue;
            } else {
            delay3 = delay3 - 1
    
            let hackeando3 = new Discord.MessageEmbed()
            .setColor("#228B22")
            .setDescription("Hackeando o codigo fonte do sistema...")
            msg.edit(hackeando3)
                }
            }
    
            let delay4 = 3;
            for (let i = 0; i < 3; i++) {
            await timeout(1000)
            if(delay4 == 0) {
              continue;
            } else {
            delay4 = delay4 - 1
    
            let hackeando4 = new Discord.MessageEmbed()
            .setColor("#228B22")
            .setDescription("**Acesso Garantido.**")
            msg.edit(hackeando4)
                }
            }
    
            let escoPasta = new Discord.MessageEmbed()
            .setColor("#228B22")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription("Existem 3 pastas com arquivos importantes do governo,porém você não consegue fazer o download das 3 pastas antes de ser descoberto,então você terá que escolher uma.Digite ``pasta-fonte`` para escolher a primeira pasta ou ``pasta-escandalos`` para escolher a segunda pasta ou ``pasta-subornos`` para escolher a ultima pasta.")
            message.channel.send(escoPasta)
    
            let collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
            collector1.on('collect', async(m) => {
                if(m.content.toLowerCase().includes('pasta-fonte')) {
                    collector1.stop()
                    pastaFonte()
                } else if(m.content.toLowerCase().includes('pasta-escandalos')) {
                    collector1.stop()
                    pastaEscandalos()
                } else if(m.content.toLowerCase().includes('pasta-subornos')) {
                    collector1.stop()
                    pastaSubornos()
                }
            })
        } else {

            let delay = 3;
            for (let i = 0; i < 3; i++) {
            await timeout(1000)
            if(delay == 0) {
              continue;
            } else {
            delay = delay - 1
    
            let hackeando = new Discord.MessageEmbed()
            .setColor("#228B22")
            .setDescription("Entrando no sistema do banco central...")
            msg.edit(hackeando)
                }
            }
    
            let delay1 = 3;
            for (let i = 0; i < 3; i++) {
            await timeout(1000)
            if(delay1 == 0) {
              continue;
            } else {
            delay1 = delay1 - 1
    
            let hackeando1 = new Discord.MessageEmbed()
            .setColor("#228B22")
            .setDescription("Localizando uma falha na segurança...")
            msg.edit(hackeando1)
                }
            }
    
            let delay2 = 3;
            for (let i = 0; i < 3; i++) {
            await timeout(1000)
            if(delay2 == 0) {
              continue;
            } else {
            delay2 = delay2 - 1
    
            let hackeando2 = new Discord.MessageEmbed()
            .setColor("#228B22")
            .setDescription("Falha na segurança encontrada,invadindo...")
            msg.edit(hackeando2)
                }
            }

            let delay3 = 3;
            for (let i = 0; i < 3; i++) {
            await timeout(1000)
            if(delay3 == 0) {
              continue;
            } else {
            delay3 = delay3 - 1
    
            let hackeando3 = new Discord.MessageEmbed()
            .setColor("#8B0000")
            .setDescription("Oow não fomos descobertos...")
            msg.edit(hackeando3)
                }
            }

            let perdeuMoney = Math.floor(Math.random() * 10000 - 5000) + 5000;
            db1ref.update({
                real: db1.val().real - perdeuMoney,
            })

            let deuRuim = new Discord.MessageEmbed()
            .setColor("#8B0000")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription(`Oow não eles descobriram que você tentou hackear o sistema deles,você foi preso e teve que pagar a fiança no valor de: \n > **R$${perdeuMoney}**`)
            msg.edit(deuRuim)
        }
    }

    async function pastaFonte() {

        let pasta = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("C:/BancoCentral/Governo/Pasta-Fonte/ArquivosImportantes")
        let msg1 = await message.channel.send(pasta)

        let delay = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay == 0) {
          continue;
        } else {
        delay = delay - 1

        let hackeando = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Extraindo arquivos da pasta...")
        msg1.edit(hackeando)
            }
        }

        let delay1 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay1 == 0) {
          continue;
        } else {
        delay1 = delay1 - 1

        let hackeando1 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 10%")
        msg1.edit(hackeando1)
            }
        }

        let delay2 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay2 == 0) {
          continue;
        } else {
        delay2 = delay2 - 1

        let hackeando2 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 35%")
        msg1.edit(hackeando2)
            }
        }

        let delay3 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay3 == 0) {
          continue;
        } else {
        delay3 = delay3 - 1

        let hackeando3 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 52%")
        msg1.edit(hackeando3)
            }
        }

        let delay4 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay4 == 0) {
          continue;
        } else {
        delay4 = delay4 - 1

        let hackeando4 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 67%")
        msg1.edit(hackeando4)
            }
        }

        let delay5 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay5 == 0) {
          continue;
        } else {
        delay5 = delay5 - 1

        let hackeando5 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 76%")
        msg1.edit(hackeando5)
            }
        }

        let delay6 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay6 == 0) {
          continue;
        } else {
        delay6 = delay6 - 1

        let hackeando6 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 83%")
        msg1.edit(hackeando6)
            }
        }

        let delay7 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay7 == 0) {
          continue;
        } else {
        delay7 = delay7 - 1

        let hackeando7 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 89%")
        msg1.edit(hackeando7)
            }
        }

        let delay8 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay8 == 0) {
          continue;
        } else {
        delay8 = delay8 - 1

        let hackeando8 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 94%")
        msg1.edit(hackeando8)
            }
        }

        let delay9 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay9 == 0) {
          continue;
        } else {
        delay9 = delay9 - 1

        let hackeando9 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 99%")
        msg1.edit(hackeando9)
            }
        }

        let delay10 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay10 == 0) {
          continue;
        } else {
        delay10 = delay10 - 1

        let hackeando10 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download Concluido Com Sucesso.")
        msg1.edit(hackeando10)
            }
        }

        let falas = [
            "o governo tinha uma fonte de armas ilegais",
            "o governador tinha uma mansão comprada com dinheiro sujo",
            "o vice-presidente tem uma mansão comprada com dinheiro sujo",
            "todos os governadores tem uma conta no exterior aonde guardam o dinheiro sujo",
            "o presidente desviou 800 bilhões de reias que iria para saúde",
        ]
        let randFalas = falas[Math.floor(Math.random() * falas.length)];
        let gMoney = Math.floor(Math.random() * 8000);
        db1ref.update({
            real: db1.val().real + gMoney,
        })

        let Hackeado = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você hackeou o banco central e descobriu que: ${randFalas}.Você subornou o governo e ganhou: \n > **R$${gMoney}**`)
        .setThumbnail("https://imgur.com/tYCgZXR.png")
        msg1.edit(Hackeado)
    }

    async function pastaEscandalos() {

        let pasta = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("C:/BancoCentral/Governo/Pasta-Escandalos/ArquivosImportantes")
        let msg1 = await message.channel.send(pasta)

        let delay = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay == 0) {
          continue;
        } else {
        delay = delay - 1

        let hackeando = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Extraindo arquivos da pasta...")
        msg1.edit(hackeando)
            }
        }

        let delay1 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay1 == 0) {
          continue;
        } else {
        delay1 = delay1 - 1

        let hackeando1 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 10%")
        msg1.edit(hackeando1)
            }
        }

        let delay2 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay2 == 0) {
          continue;
        } else {
        delay2 = delay2 - 1

        let hackeando2 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 35%")
        msg1.edit(hackeando2)
            }
        }

        let delay3 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay3 == 0) {
          continue;
        } else {
        delay3 = delay3 - 1

        let hackeando3 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 52%")
        msg1.edit(hackeando3)
            }
        }

        let delay4 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay4 == 0) {
          continue;
        } else {
        delay4 = delay4 - 1

        let hackeando4 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 67%")
        msg1.edit(hackeando4)
            }
        }

        let delay5 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay5 == 0) {
          continue;
        } else {
        delay5 = delay5 - 1

        let hackeando5 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 76%")
        msg1.edit(hackeando5)
            }
        }

        let delay6 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay6 == 0) {
          continue;
        } else {
        delay6 = delay6 - 1

        let hackeando6 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 83%")
        msg1.edit(hackeando6)
            }
        }

        let delay7 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay7 == 0) {
          continue;
        } else {
        delay7 = delay7 - 1

        let hackeando7 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 89%")
        msg1.edit(hackeando7)
            }
        }

        let delay8 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay8 == 0) {
          continue;
        } else {
        delay8 = delay8 - 1

        let hackeando8 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 94%")
        msg1.edit(hackeando8)
            }
        }

        let delay9 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay9 == 0) {
          continue;
        } else {
        delay9 = delay9 - 1

        let hackeando9 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 99%")
        msg1.edit(hackeando9)
            }
        }

        let delay10 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay10 == 0) {
          continue;
        } else {
        delay10 = delay10 - 1

        let hackeando10 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download Concluido Com Sucesso.")
        msg1.edit(hackeando10)
            }
        }

        let falas = [
            "a mulher do governado teria traido ele com a secretaria dele",
            "um dos governadores estava tendo um caso com a sua secretaria",
            "o vice-presidente estava traido sua mulher com um dos governadores",
            "um dos governadores traia sua mulher com o vice-presidente",
            "que o presidente traia sua mulher com o vereado da camara",
        ]
        let randFalas = falas[Math.floor(Math.random() * falas.length)];
        let gMoney = Math.floor(Math.random() * 8000)
        db1ref.update({
            real: db1.val().real + gMoney,
        })

        let Hackeado = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você hackeou o banco central e descobriu que: ${randFalas}.Você subornou o governo e ganhou: \n > **R$${gMoney}**`)
        .setThumbnail("https://imgur.com/tYCgZXR.png")
        msg1.edit(Hackeado)
    }

    async function pastaSubornos() {

        let pasta = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("C:/BancoCentral/Governo/Pasta-Subornos/ArquivosImportantes")
        let msg1 = await message.channel.send(pasta)

        let delay = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay == 0) {
          continue;
        } else {
        delay = delay - 1

        let hackeando = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Extraindo arquivos da pasta...")
        msg1.edit(hackeando)
            }
        }

        let delay1 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay1 == 0) {
          continue;
        } else {
        delay1 = delay1 - 1

        let hackeando1 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 10%")
        msg1.edit(hackeando1)
            }
        }

        let delay2 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay2 == 0) {
          continue;
        } else {
        delay2 = delay2 - 1

        let hackeando2 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 35%")
        msg1.edit(hackeando2)
            }
        }

        let delay3 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay3 == 0) {
          continue;
        } else {
        delay3 = delay3 - 1

        let hackeando3 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 52%")
        msg1.edit(hackeando3)
            }
        }

        let delay4 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay4 == 0) {
          continue;
        } else {
        delay4 = delay4 - 1

        let hackeando4 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 67%")
        msg1.edit(hackeando4)
            }
        }

        let delay5 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay5 == 0) {
          continue;
        } else {
        delay5 = delay5 - 1

        let hackeando5 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 76%")
        msg1.edit(hackeando5)
            }
        }

        let delay6 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay6 == 0) {
          continue;
        } else {
        delay6 = delay6 - 1

        let hackeando6 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 83%")
        msg1.edit(hackeando6)
            }
        }

        let delay7 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay7 == 0) {
          continue;
        } else {
        delay7 = delay7 - 1

        let hackeando7 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 89%")
        msg1.edit(hackeando7)
            }
        }

        let delay8 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay8 == 0) {
          continue;
        } else {
        delay8 = delay8 - 1

        let hackeando8 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 94%")
        msg1.edit(hackeando8)
            }
        }

        let delay9 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay9 == 0) {
          continue;
        } else {
        delay9 = delay9 - 1

        let hackeando9 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download 99%")
        msg1.edit(hackeando9)
            }
        }

        let delay10 = 3;
        for (let i = 0; i < 3; i++) {
        await timeout(1000)
        if(delay10 == 0) {
          continue;
        } else {
        delay10 = delay10 - 1

        let hackeando10 = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setDescription("Download Concluido Com Sucesso.")
        msg1.edit(hackeando10)
            }
        }

        let falas = [
            "o governo tinha subornado o empresário Steve Jobs",
            "o governador paga propina para os policias",
            "o vice-presidente teria pagado mais de 100 bilhões em suborno para a mafia japonesa",
            "um dos governadores pagava 1 milhão todo dia para um traficante trazer drogas no escritorio dele",
            "o presidente pagou 1 trilhão em propina para empresas multinacionais",
        ]
        let randFalas = falas[Math.floor(Math.random() * falas.length)];
        let gMoney = Math.floor(Math.random() * 8000)
        db1ref.update({
            real: db1.val().real + gMoney,
        })

        let Hackeado = new Discord.MessageEmbed()
        .setColor("#228B22")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você hackeou o banco central e descobriu que: ${randFalas}.Você subornou o governo e ganhou: \n > **R$${gMoney}**`)
        .setThumbnail("https://imgur.com/tYCgZXR.png")
        msg1.edit(Hackeado)
    }

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
}