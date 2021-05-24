const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "error",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description:"Error",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**List of Error Codes**")
    .setDescription(`Here are the [ERROR Code](https://cdn.deutschlandmaps.repl.co/error) List.
    If you need help. Type ;help or [join](https://dsc.gg/deutschlandmaps-support) the support server.`)

      
    message.channel.send(main)
  }
}