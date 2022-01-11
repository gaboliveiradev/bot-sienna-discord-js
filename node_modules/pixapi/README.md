# Descrição

PixApi é uma api simples em **[node.js](https://www.npmjs.com/)** com intuito de simplificar muitas coisas no desenvolvimento de bots para o discord

## Instalação

Para instalar a api

```bash
npm install --save pixapi@latest
```

## Exemplo Uso

```javascript
const PixApi = require('pixapi');

console.log(PixApi.formatDate(`Data e Hora Atuais DD/MM/YYYY HH:mm:ss`, Date.now())); // Date format command
console.log(PixApi.replaceString(10, 50, "+", "-")); // Replace string
console.log(PixApi.calc("123*123")); // Calcs String
console.log(PixApi.randomChars(10)); // Random characters
console.log(PixApi.randomNumber(300, 310)); // random number between 300 and 310

let time = PixApi.formatTimer(5.88e+6); // Time left
console.log(`${time.days}d ${time.hours}h ${time.seconds}s`);
```
