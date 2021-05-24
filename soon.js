const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "soon",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description:"Soon Commands",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Soon Commands**")
    .setDescription(` Click [here](https://cdn.deutschlandmaps.repl.co/bot.txt) for the command list and soon list`)

      
    message.channel.send(main)
  }
}