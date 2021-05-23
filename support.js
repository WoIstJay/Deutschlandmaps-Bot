const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "support",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description: "Shows bots support server",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Support server**")
    .setDescription("(Click here)[https://discord.gg/H3be357MN5] to join support server")
      
    message.channel.send(main)
  }
}