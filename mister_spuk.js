const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "mister_spuk",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description:"Mister_Spuk",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Invite Mister_Spuk**")
    .setDescription(`[Here](https://discord.gg/DcaKY3FPMx) you can join <@537608756859633664>s Community Server.\n Please note that the server is German.🇩🇪`)

      
    message.channel.send(main)
  }
}