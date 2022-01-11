const Discord = require('discord.js');

exports.run = async function(client, message, args, database) {

    const quiz = require('./quiz.json');
    const item = quiz[Math.floor(Math.random() * quiz.length)];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    
    message.channel.send(item.question).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected.first().author} a resposta está correta.`);
            })
            .catch(collected => {
                message.channel.send('Ops,parece que ninguem sabe a resposta desta vez.');
            });
    }); 
}