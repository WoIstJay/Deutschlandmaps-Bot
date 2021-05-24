const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "utilities",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description:"Update",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Invite Utilities Bot**")
    .setDescription(`Here you can [Invite](https://discord.com/oauth2/authorize?client_id=826795698095390733&permissions=8&scope=bot) Utilities Bot`)

      
    message.channel.send(main)
  }
}