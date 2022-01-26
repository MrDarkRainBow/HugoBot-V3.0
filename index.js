const {Client, Intents} = require('discord.js');
const bot = new Client({intents: [Intents.FLAGS.GUILDS]});
const config = require('./config.json');

let date_ob = new Date();

bot.on('ready', () => {
    console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: ${bot.user.username} is now online!`);
});

bot.login(config.token);