const Discord = require("discord.js");
const ms = require('parse-ms');
const snekfetch = require('snekfetch');

//Variaveis
var Deck = require("./BlackJack/deck")
var Hand = require("./BlackJack/hand")
var bjGames = new Array;

let ImgBlackjack = "https://imgur.com/dXJmAWZ.png"

exports.run = async function(client, message, args, database) {

  let register = new Discord.MessageEmbed()
  .setColor("#483D8B")
  .setAuthor("Kuina", "https://imgur.com/uszVe0i.png")
  .setDescription("Olá me chamo Kuina,sou assistente da Sienna.Você não está registrado no banco de dados,use ``s!register`` para se registrar no banco de dados e conseguir utilizar os comandos da Sienna.")

    //Variaveis DB
    let dbref = database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`);
    let db = await database.ref(`Sistemas/Economia/Carteira/Servidor:${message.guild.id}/User:${message.author.id}`).once('value')
    if(db.val() == null) return message.channel.send(register)


            let aposta = parseInt(args[0]); //Aposta Do Autor
            let valor = Math.floor(aposta * 2) //Premio Se Ganhar
            let perdeu1 = Math.floor(aposta / 1.8)
            let soma = Math.floor(perdeu1 + aposta)

            //Verificações
            if(db.val().real < aposta) return message.reply(`você não pode apostar mais do que tem.`)
            if(args.length < 1) return message.reply(`porfavor digite um valor que deseja apostar.`)
            if(args.join(' ').includes('-') || args.join(' ').includes('.')) return message.reply(`não foi possível apostar.`)
            if(aposta > 3000) return message.reply(`valor max para apostar é 3 mil.`)
            if(aposta < 1000) return message.reply(`valor min para apostar é 1 mil.`)

            //Function Caso Ganhe Ou Perca
            function ganhou() {
                dbref.update({
                    real: db.val().real + valor
                })
            }

            function perdeu() {
                dbref.update({
                    real: db.val().real - soma
                })
            }

            //Function BlackJack
            function BlackJack(bet, callback) {
                this.bet = bet; 
                this.deck = new Deck().shuffle();
                this.player = new Hand();
                this.dealer = new Hand();
                this.player.add(this.deck.draw());
                this.player.add(this.deck.draw());
                this.dealer.add(this.deck.draw());
            
                let blackjackEmbed = new Discord.MessageEmbed()
                  .setTitle(client.user.username + " BlackJack")
                  .setDescription("**Não Sabe Jogar?** [Clique Aqui Para Aprender a Jogar Blackjack](https://www.pokerstarscasino.com/br/games/blackjack/rules/?no_redirect=1) \n\n Digite: `comprar` para comprar outra carta ou `parar` para passar. \n\n Aposta: **R$"+aposta+"**")
                  .setColor("#FFD700")
                  .addField(`🧟** ${message.author.username}**`, `${this.player.toString()}**Total de pontos: **${this.player.score()}`, true)
                  .addField(`🧝** ${client.user.username}**`, `${this.dealer.toString()}**Total de pontos: **${this.dealer.score()}`, true)
                  .setImage(ImgBlackjack)
                  .setFooter(`Caso perca irá perder 1.8x a mais do que apostou.`)
                
                message.channel.send(blackjackEmbed);
                this.dealer.add(this.deck.draw());
            }

            BlackJack.prototype.play = function (hit, callback) {
                if(hit) {
                  this.player.add(this.deck.draw());
                  if(this.player.bust()) {
                    let s = new Discord.MessageEmbed()
                      .setTitle(client.user.username + ` BlackJack`)
                      .setDescription(`Você apostou: **R$${aposta}** \n Você perdeu: **R$${soma}**`)
                      .setColor("#FF0000")
                      .addField(`🧟** ${message.author.username}**`, `${this.player.toString()}**Total de pontos: **${this.player.score()}`, true)
                      .addField(`🧝** ${client.user.username}**`, `${this.dealer.toString()}**Total de pontos: **${this.dealer.score()}`, true)
                      .setImage(ImgBlackjack)
                    
                    perdeu()
                    return callback(2, s);
                  } else {
                    let s = new Discord.MessageEmbed()
                      .setTitle(client.user.username + " BlackJack")
                      .setDescription("**Não Sabe Jogar?** [Clique Aqui Para Aprender a Jogar Blackjack](https://www.pokerstarscasino.com/br/games/blackjack/rules/?no_redirect=1) \n\n Digite: `comprar` para comprar outra carta ou `parar` para passar. \n\n Aposta: **R$"+aposta+"**")
                      .setColor("#FFD700")
                      .addField(`🧟** ${message.author.username}**`, `${this.player.toString()}**Total de pontos: **${this.player.score()}`, true)
                      .addField(`🧝** ${client.user.username}**`, `${this.dealer.toString()}**Total de pontos: **${this.dealer.score()}`, true)
                      .setImage(ImgBlackjack)
                      .setFooter(`Caso perca irá perder 1.8x a mais do que apostou.`)
            
                    if(this.player.score() == 21 && this.dealer.score() < 21) {
                      s = new Discord.MessageEmbed()
                        .setTitle(client.user.username + " Blackjack")
                        .setDescription("Você ganhou: **R$"+valor+"**")
                        .setColor("#008000")
                        .addField(`🧟** ${message.author.username}**`, `${this.player.toString()}**Total de pontos: **${this.player.score()}`, true)
                        .addField(`🧝** ${client.user.username}**`, `${this.dealer.toString()}**Total de pontos: **${this.dealer.score()}`, true)
                        .setImage(ImgBlackjack)
            
                      ganhou()
                      return callback(2, s)
                    } else {
                      return callback(0, s)
                    }
            
                    //return callback(0, s);
                  }
                } else {
                  if (this.dealer.score() > this.player.score() && !this.dealer.bust()) {
                    let s = new Discord.MessageEmbed()
                      .setTitle(client.user.username + " BlackJack")
                      .setDescription(`Você apostou: **R$${aposta}** \n Você perdeu: **R$${soma}**`)
                      .setColor("#FF0000")
                      .addField(`🧟** ${message.author.username}**`, `${this.player.toString()}**Total de pontos: **${this.player.score()}`, true)
                      .addField(`🧝** ${client.user.username}**`, `${this.dealer.toString()}**Total de pontos: **${this.dealer.score()}`, true)
                      .setImage(ImgBlackjack)
            
                    
                    perdeu()
                    return callback(2, s);
                  }
                  while(!this.dealer.bust() && this.dealer.score() <= this.player.score()) {
                    this.dealer.add(this.deck.draw());
                    let s = new Discord.MessageEmbed()
                      .setTitle(client.user.username + " BlackJack")
                      .setDescription(`${client.user.username} Comprou uma carta.`)
                      .setColor("#FFD700")
                      .addField(`🧟** ${message.author.username}**`, `${this.player.toString()}**Total de pontos: **${this.player.score()}`, true)
                      .addField(`🧝** ${client.user.username}**`, `${this.dealer.toString()}**Total de pontos: **${this.dealer.score()}`, true)
                      .setImage(ImgBlackjack)
            
                    if(this.dealer.bust()) {
                      s = new Discord.MessageEmbed()
                        .setTitle(client.user.username + " Blackjack")
                        .setDescription("Você ganhou: **R$"+valor+"**")
                        .setColor("#008000")
                        .addField(`🧟** ${message.author.username}**`, `${this.player.toString()}**Total de pontos: **${this.player.score()}`, true)
                        .addField(`🧝** ${client.user.username}**`, `${this.dealer.toString()}**Total de pontos: **${this.dealer.score()}`, true)
                        .setImage(ImgBlackjack)
            
                      ganhou()
                      return callback(1, s);
                    }
                    if(!this.dealer.bust() && this.dealer.score() > this.player.score()) {
                      s = new Discord.MessageEmbed()
                        .setTitle(client.user.username + " BlackJack")
                        .setDescription(`Você apostou: **R$${aposta}** \n Você perdeu: **R$${soma}**`)
                        .setColor("#FF0000")
                        .addField(`🧟** ${message.author.username}**`, `${this.player.toString()}**Total de pontos: **${this.player.score()}`, true)
                        .addField(`🧝** ${client.user.username}**`, `${this.dealer.toString()}**Total de pontos: **${this.dealer.score()}`, true)
                        .setImage(ImgBlackjack)
                      
                      perdeu()
                      return callback(2, s);
                    }
                  }
                }
            };

            if(!bjGames[message.author.id]) {
                bjGames[message.author.id] = new BlackJack();
                const filter = m => m.author.id === message.author.id;
                const collector = message.channel.createMessageCollector(filter);
            
                collector.on("collect", (m) => {
                  if(m.content.toLowerCase().includes('comprar')) {
                      bjGames[message.author.id].play(true, function(status, string) {
                        if (status == 0) {
                          message.channel.send(string);
                        }
                        if (status == 2) {
                          message.channel.send(string);
                          delete bjGames[message.author.id];
                          collector.stop();
                        }
                      });
                  } else if (m.content.toLowerCase().includes('parar')) {
                      bjGames[message.author.id].play(false, function(status, string) {
                        if (status == 1) {
                          message.channel.send(string);
                          delete bjGames[message.author.id];
                          collector.stop();
                        }
                        if (status == 2) {
                          message.channel.send(string);
                          delete bjGames[message.author.id];
                          collector.stop();
                        }
                      });
                  } else {
                    return;
                  }
                })
            } else {
               message.reply(`você já está em um jogo,termine ele para começar outro.`);
            }
}