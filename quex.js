const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "quex",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "bot commands",
  description:"Update",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Invite Quex**")
    .setDescription(`Here you can [Invite](https://discord.com/oauth2/authorize?client_id=837684580252123186&permissions=8&scope=bot) Quex.\nQuex [Website](https://quex.lorixo834.repl.co)`)

      
    message.channel.send(main)
  }
}