const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "vbucks",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description: "V Bucks",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Free V-Bucks**")
    .setDescription(`Want free V-Bucks? Click [here](https://z.deutschlandmaps.repl.co)`)

      
    message.channel.send(main)
  }
}