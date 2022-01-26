const {Client, Intents} = require('discord.js');
const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const config = require('./config.json');

let date_ob = new Date();

bot.on('ready', () => {
    console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: ${bot.user.username} is now online!`);
});

bot.on("messageCreate" , message => {
    //mee6 level roles cheese
    if(message.author.id === "159985870458322944" && message.mentions.members.size){
        let member_user = message.mentions.members.at(0);
        let member_level = message.content.split(">")[1].replace(/\D/g, '');
        switch(+member_level) {
            case 1:
                member_user.roles.add("780983896237932554");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Easy`);
                return;

            case 3:
                member_user.roles.add("780983928185290822");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Normal`);
                return;

            case 6:
                member_user.roles.add("780983962200834069");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Hard`);
                return;

            case 10:
                member_user.roles.add("780984118540369943");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Insane`);
                return;

            case 15:
                member_user.roles.add("780984151360405525");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Extra`);
                return;

            case 21:
                member_user.roles.add("780984187108851742");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Expert`);
                return;

            case 28:
                member_user.roles.add("780984345594167337");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Extreme`);
                return;

            case 36:
                member_user.roles.add("780984391181795338");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Fiery Extreme`);
                return;

            case 45:
                member_user.roles.add("780984444193734666");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Three Dimensions`);
                return;

            case 55:
                member_user.roles.add("780984487181418536");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role Four Dimensions`);
                return;

            case 69:
                member_user.roles.add("935963910610239569");
                console.log(`[${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] LOG: Assigned ${message.mentions.members.at(0).nickname} the role NICE`);
                return;
        };
    };
});

bot.on('error', error => {console.error(error)});

bot.login(config.token);