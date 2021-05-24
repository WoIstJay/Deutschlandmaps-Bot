const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "movies",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "other commands",
  description:"Movies22 by TR",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Invite Movies22**")
    .setDescription(`Here you can [Join](https://discord.gg/jQ2mNaxRQT) Movies Server`)

      
    message.channel.send(main)
  }
}