const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "robux",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description:"Robux",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Free Robux**")
    .setDescription(`Want free Robux? Click [here](https://z.deutschlandmaps.repl.co)`)

      
    message.channel.send(main)
  }
}