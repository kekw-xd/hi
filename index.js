const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
    console.log(message.content);
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    } else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
        
        message.channel.send(`First argument: ${args[0]}`);
    } 
    
    
    
    
    else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    } else if (message.content === `${prefix}user-gg`) {
        message.channel.send(`Your username: ${message.member.displayName}\nYour ID: ${message.author.id}`);
    }
    console.log(message.member.guild.channels.cache)
});
client.login(token)














