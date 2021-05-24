const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "test",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description:"Test Command",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Test**")
    .setDescription(`Test passed 
    Do you need help? Type ;help for commands
    `)

      
    message.channel.send(main)
  }
}