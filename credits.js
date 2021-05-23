const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "credits",
  cooldown: 0,
  category: "other commands",
  permitons: "SEND_MESSAGES",
  description: "Shows bots credits",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Credits**")
    .setDescription(`Special thanks for all people inviting this bot`)
      .addFields({
              name: 'Credits',
              value: 'Coded by: Woistjay#8924. <@824955490043822111> \nHelped by: Movies22 by TR#7790 <@715587947717722183>',
              
              inline: false
            })
    message.channel.send(main)
  }
}