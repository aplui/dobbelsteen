const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    function randomNumber(min,max){
      return Math.floor(Math.random()*(max-min+1)+min);
  }

    if (msg.content === '!roll') {
      msg.reply(randomNumber(1,100));
    }
  });
  
  client.login(config.token);