Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "help",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  description: "Shows help menu for moderator commands",
  async execute(client, message, args, Discord, db, Database) {
    const custom_prefix = await db.get(`${message.guild.id}-prefix`) || ';'
    const main = new Discord.MessageEmbed()
    .setTitle("**Help menu | Moderator Commands**")
    .setDescription(`The server prefix is \`${custom_prefix}\``)
      .addFields({
              name: '**;kick**',
              value: 'Kicks a member',
              inline: true
            }, {
              name: '**;ban**',
              value: 'Bans a member',
              inline: true
            }, {
              name: '**;robux**',
              value: 'Send free Robux',
              inline: true
            },{
              name: '**Soon**',
              value: 'Work In Progress',
              inline: true
            }, {
              name: '**Soon**',
              value: 'Work In Progress',
              inline: true
            }, {
              name: '**Soon**',
              value: 'Suggestion? Write your suggestions [here](https://discord.gg/wy6bCbnpW2) in suggestions channel',
              inline: true
            })
    message.channel.send(main)
  }
}