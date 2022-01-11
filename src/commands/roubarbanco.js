const Discord = require('discord.js');
const pixapi = require('pixapi');

exports.run = async function(client, message, args, database) {
    
    //Mencionar User + Verificação 
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.reply(`você não pode roubar um banco sozinho,chame um parceiro.`)
    if(user == message.author.id) return message.reply(`você não pode assaltar um banco sozinho,chame um parceiro.`)

    let register = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    let registermenc = new Discord.MessageEmbed()
    .setColor("#483D8B")
    .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
    .setDescription("Olá me chamo Kuina,sou assistente da Sienna.A pessoa que você mencionou não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")
    
    //Variaveis DB
    let timeo = 6.048e+8;
    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);  //Carteira Do Autor
    let db1ref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${user.id}`); //Carteira Do Parceiro
    let db2ref = database.ref(`Sistemas/Economia/Delay/RoubarBanco/Servidor:${message.guild.id}/User:${message.author.id}`); //Delay Do Autor
    let db3ref = database.ref(`Sistemas/Economia/Delay/RoubarBanco/Servidor:${message.guild.id}/User:${user.id}`); //Delay Do Parceiro
    let db4ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`); //Armas Do Autor
    let db5ref = database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${user.id}`); //Armas Do Parceiro
    let db6ref = database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`); //Ficha Do Autor
    let db7ref = database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${user.id}`); //Ficha Do Parceiro
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db1 = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${user.id}`).once('value')
    let db2 = await database.ref(`Sistemas/Economia/Delay/RoubarBanco/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db3 = await database.ref(`Sistemas/Economia/Delay/RoubarBanco/Servidor:${message.guild.id}/User:${user.id}`).once('value')
    let db4 = await database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db5 = await database.ref(`Sistemas/Economia/Ferramentes&Armas/Servidor:${message.guild.id}/User:${user.id}`).once('value')
    let db6 = await database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    let db7 = await database.ref(`Sistemas/Economia/Ficha/Servidor:${message.guild.id}/User:${user.id}`).once('value')
    if(db.val() == null || db2.val() == null || db4.val() == null || db6.val() == null) return message.channel.send(register)
    if(db1.val() == null || db3.val() == null || db5.val() == null || db7.val() == null) return message.channel.send(registermenc)

    //Verificações
    if(db4.val().m4 == false) return message.reply(`você precisa de uma M4 para assaltar o banco.`)
    if(db5.val().m4 == false) return message.channel.send(`${user} você precisa de uma M4 para assaltar o banco`)
    if(db4.val().m4 && db5.val().m4 == false) return message.reply(`você e seu parceiro precisam de duas M4 para roubarem o banco.`)
    if(db4.val().munim4 < 25) return message.reply(`você precisa ter no min 25 munições de M4 para assaltar o banco.`)
    if(db5.val().munim4 < 25) return message.reply(`seu parceiro precisa ter no min 25 munições de M4 para assaltar o banco.`)

    //Variavel
    let vezes = 0;

    //Delay Autor
    if(db2.val().delay !== null && timeo - (Date.now() - db2.val().delay) > 0) {
       let time = pixapi.formatTimer(timeo - (Date.now() - db2.val().delay));

       let dl = new Discord.MessageEmbed()
       .setColor("#FF69B4")
       .setThumbnail("https://imgur.com/91GPuFR.gif")
       .setAuthor(message.author.username, message.author.avatarURL())
       .setDescription(`Você não pode roubar o banco agora,tente novamente em: \n > **${time.days}d ${time.hours}h ${time.minutes}m e ${time.seconds}s**`)

       return message.channel.send(dl)
    }
    //Delay Parceiro
    if(db3.val().delay !== null && timeo - (Date.now() - db3.val().delay) > 0) {
        let time = pixapi.formatTimer(timeo - (Date.now() - db3.val().delay));
 
        let dl1 = new Discord.MessageEmbed()
        .setColor("#FF69B4")
        .setThumbnail("https://imgur.com/91GPuFR.gif")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`Você não pode roubar o banco agora,tente novamente em: \n > **${time.days}d ${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
 
        return message.channel.send(dl1)
    }

    //Balas Perdidas
    let random = Math.floor(Math.random() * 20);
    let random1 = Math.floor(Math.random() * 20);

    //Embed Confirmação Participar Do Assalto
    let per = new Discord.MessageEmbed()
    .setColor("#36393F")
    .setDescription(`${user}` + " você quer partipar do assalto ao banco central?Digite `sim` para participar do assalto ou `não` para não participar do assalto.")

    message.channel.send(per)

    //Coletores
    let collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === user.id, { time: 30000, max: 1 })
    collector1.on("collect", (msg) => {
        if(msg.content.toLowerCase().includes('sim') || msg.content.toLowerCase().includes('participar')) {
          collector1.stop()
          start()
        } else {
          collector1.stop()
          let nao = new Discord.MessageEmbed()
          .setColor("#36393F")
          .setDescription(`${user} você negou participar do assalto ao banco central.`)
          return message.reply(nao)
        }
    })

    async function start() {

      let collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
      let collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === user.id, { time: 30000 });

      let cmc = new Discord.MessageEmbed()
      .setColor("#36393F")
      .setDescription("Roubo iniciado flode a palavra `coletar` no chat para roubar a grana, e depois a palavra `fugir` para não ser pego pelos policiais")

      message.channel.send(cmc)

      let fg = false, f = false, vezes1 = 0, vezes2 = 0, t1 = false, t2 = false;

      collector2.on('collect', (msg) => {
        let m = a => msg.content.toLowerCase().includes(a);
  
        if(m('coletar')) {
          if(fg) {
              let fugiu = new Discord.MessageEmbed()
              .setColor("#36393F")
              .setAuthor(message.author.username, message.author.avatarURL())
              .setDescription("Seu parceiro fugiu,seja rápido e digite a palavra `fugir` no chat para não ser pego pelos policiais")
            if(!f) {message.channel.send(fugiu); f = true;}
            else {vezes1 += Math.floor(Math.random() * 25000);}
          } else {
            vezes1 += Math.floor(Math.random() * 25000);
          }
        } else if (m('fugir')) {
          t1 = true;
          fg = true;
          collector2.stop();
          let esp = new Discord.MessageEmbed()
          .setColor("#36393F")
          .setAuthor(message.author.username, message.author.avatarURL())
          .setDescription(`${message.author} Você trocou tiro com a policia gastou ${random} balas e conseguiu fugir, e levou junto com você: \n > **R$${vezes1}**`)
          message.channel.send(esp);
        }
      })

      collector3.on('collect', (msg) => {
        let m = a => msg.content.toLowerCase().includes(a);
  
        if(m('coletar')) {
          if(fg) {
              let foi = new Discord.MessageEmbed()
              .setColor("#36393F")
              .setAuthor(message.author.username, message.author.avatarURL())
              .setDescription("Você ficou sozinho,seu parceiro fugiu.Digite a palavra `fugir` para conseguir escapar dos policiais")
            if(!f) {message.channel.send(foi); f = true;}
            else {vezes2 += Math.floor(Math.random() * 25000);}
          } else {
            vezes2 += Math.floor(Math.random() * 25000);
          }
        } else if (m('fugir')) {
          t2 = true;
          fg = true;
          collector3.stop();
          let foi2 = new Discord.MessageEmbed()
          .setColor("#36393F")
          .setAuthor(user.user.username, user.user.avatarURL())
          .setDescription(`${user} Você trocou tiro com a policia gastou ${random1} balas e conseguiu fugir, e levou junto com você: \n > **R$${vezes2}**`)
          message.channel.send(foi2);
        }
      })

    //Caso for Pego || Se Der Bem (Autor)
    collector2.on('end', () => {
        if(!t1) {
            let deuruim = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription(`${message.author} você ficou muito tempo dentro do banco e os policias te pegaram, você perdeu **R$5000** e eles confiscaram todas suas armas e munições.`)
            
            message.channel.send(deuruim)

            //Atualizando a DB
            dbref.update({
                real: db.val().real - 5000
            })
            db2ref.update({
                delay: Date.now()
            })
            db4ref.update({
                m4: false,
                munim4: 0
            })
            db6ref.update({
                procurado: true
            })

        } else {
          
            //Atualizando a DB Deu bom

            dbref.update({
                real: db.val().real + vezes1
            })
            db2ref.update({
                delay: Date.now()
            })
            db4ref.update({
                munim4: db4.val().munim4 - random
            })
            db6ref.update({
                procurado: true
            })
        }
    })

    //Caso For Pego || Se Der Bem (User)
    collector3.on('end', () => { // User
        if(!t2) {
            let deuruim1 = new Discord.MessageEmbed()
            .setColor("#36393F")
            .setAuthor(user.username, user.user.avatarURL())
            .setDescription(`${user} você ficou muito tempo dentro do banco e os policias te pegaram, você perdeu **R$5000** e eles confiscaram todas suas armas e munições.`)
            
            message.channel.send(deuruim1);

            //Atualizando a DB
            db1ref.update({
                real: db1.val().real - 5000
            })
            db3ref.update({
                delay: Date.now()
            })
            db5ref.update({
                m4: false,
                munim: 0
            })
            db7ref.update({
                procurado: true
            })

        } else {

            //Atualizando a DB

            db1ref.update({
                real: db1.val().real + vezes2
            })
            db3ref.update({
                delay: Date.now()
            })
            db5ref.update({
                munim: db5.val().munim - random1
            })
            db7ref.update({
                procurado: true
            })

        }
    })
    }

    function timeout(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
    }
}