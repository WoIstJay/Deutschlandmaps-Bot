const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "update",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description:"Update",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Last Update:**")
    .setDescription(`In the last bot update was added:
 ;prefix ;serverinfo 
    `)

      
    message.channel.send(main)
  }
}