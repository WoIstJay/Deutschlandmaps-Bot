const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "aluminium",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "other commands",
  description:"Aluminium",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Invite Aluminium**")
    .setDescription(`Here you can [Join](https://dsc.gg/icfansserver) Aluminium's Server`)

      
    message.channel.send(main)
  }
}