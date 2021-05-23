//libraries
const keepAlive = require('./server.js')
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const prefix = ';'
const Database = require("@replit/database");
const db = new Database();
//this creates a colletion with all your commands
client.commands = new Discord.Collection();
//code to get the command file and run it
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command2 = require(`./commands/${file}`); 
    client.commands.set(command2.name, command2);
}
//this code runs ONLY when you start your bot
client.once('ready', () => {
  console.log(`Deutschlandmaps bot is online and is helping ${client.guilds.cache.size} servers!`)
  client.user.setActivity('dsc.gg/deutschlandmaps | ;help' , { type: 'PLAYING' }) 
})
//This code runs every time someone sends a message
client.on('message', async message => {
  //this gets the server prefix [if there is no server prefix, then it sets to bots default one]
  const server_prefix = await db.get(`${message.guild.id}-prefix`) || ';'
  //this makes sure it is not a bot who is running the command.
  if(message.author.bot) return
  //this will define command and args after it
  if(message.content.startsWith(server_prefix)) {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();   
    //this runs the command
    
    const try_command = client.commands.get(command)
    
    
    if(!try_command) {
      message.channel.send(`Unknown Command, Error-404:Command not found. Type \`${server_prefix}help\` to see a list of commands`)
    } else {
      const perms = client.commands.get(command).permitions
      const warn = `WARNING. You need ${perms} permition to use this command!`
       if(message.member.permissions.has(perms)) {
       client.commands.get(command).execute(client, message, args, Discord, db, Database);
    } else {
      message.channel.send(warn)
    }
     
    }
  } else {
    
  }
  
})

keepAlive()
client.login('TOKEN);
