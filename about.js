const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "about",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "botcommands",
  description:"About",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**About Deutschlandmaps Bot**")
    .setDescription(`Hello, Deutschlandmaps Bot there. Here are things about me\n I was created from 2 Developers\nI have a own [website](https://bot.deutschlandmaps.repl.co) and a [help center](https://bot.deutschlandmaps.repl.co/support/hc/start.html).\n I have cool functions, like ;vbucks or ;rick I hope you enjoy the bot and [invite](https://dsc.gg/deutschlandmaps-bot) him in your Server.  :)\n
   If you have suggestions join our [Support Server](https://dsc.gg/deutschlandmaps-support) and write your suggestion in [this](https://discord.com/channels/834502425335300116/835249357862338632) channel.
   If you found bugs write it please [here](https://discord.com/channels/834502425335300116/835249795119054888).\nStill Questions? Type ;help for help and ;commands for the [command list](https://bot.deutschlandmaps.repl.co/s/cdn/commands.html).`)   
    
    message.channel.send(main)
  }
}