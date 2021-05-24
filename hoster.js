const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "host",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "botcommands",
  description:"Host",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Host | Replit**")
    .setDescription(`You want to know where is my bot Host? Then you used this command :)
    My Bot is Host at [Repl.it](https://replit.com).
    
    `)

      
    message.channel.send(main)
  }
}