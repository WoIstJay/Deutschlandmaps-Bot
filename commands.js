const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "commands",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description: "Commands",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Commmand-List**")
    .setDescription(`Here are the command list: Click [here](https://cdn.deutschlandmaps.repl.co/bot.txt)`)

      
    message.channel.send(main)
  }
}