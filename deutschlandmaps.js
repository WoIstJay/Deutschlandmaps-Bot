const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "deutschlandmaps",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description:"Deutschlandmaps Server Invite",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Deutschlandmaps Server**")
    .setDescription(` Click [here](https://dsc.gg/deutschlandmaps) to join the Deutschlandmaps Server`)

      
    message.channel.send(main)
  }
}