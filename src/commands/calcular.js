const math = require('mathjs');
const Discord = require('discord.js');

module.exports = {
  name: "Calculadora Brasil",
  description: "Obtenha a resposta para um problema de matemática",
  async run(client, message, args) {
      let per = args.join(" ")
    if (!per) return message.reply('Por favor, forneça uma pergunta válida');

    let resp;

    try {
      resp = math.evaluate(args.join(" "))
    } catch (e) {
      return message.reply('Por favor, forneça uma pergunta válida')
    }

    return message.reply(`a resposta para **${per}** é **${resp}** `)

  }
} 