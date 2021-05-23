const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "botinfo",
  cooldown: 0,
  category: "other commands",
  description: "Shows bots info",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**Bot info**")
    .setDescription(`This is the bot info`)
      .addFields({
              name: 'Total servers',
              value: client.guilds.cache.size,
              inline: false
            }, {
              name: 'Total members',
              value: client.guilds.cache.reduce((a, g) => a + g.memberCount, 0),
              inline: false
            }, {
              name: 'Bot Version',
              value: '**Last Bot Version:** 0.9.1',
              inline: false
            }, {
              name: 'Discord.js Version',
              value: 'Discord.js Version: v12.16.1',
              inline: false
            }, {
              name: 'Credits',
              value: 'Coded by: Woistjay#8924 <@824955490043822111> \nHelped by: Movies22 by TR#7790 <@715587947717722183>\n[Invite the Bot](https://dsc.gg/deutschlandmaps-bot)\nWoistjay Social Media: [TikTok](https://tiktok.com/@woistjay), [Twitch](https://twitch.tv/woistjay), [Twitter](https://twitter.com/woistjayy), [Github](https://github.com/woistjay), [Replit](https://replit.com/@deutschlandmaps), [Website](https://m.deutschlandmaps.repl.co)\nMovies Social Media: [YouTube](https://www.youtube.com/c/Movies22byTR/), [Planetminecraft](https://www.planetminecraft.com/member/movies22_by_tr/)',
              
              inline: false
            })
    message.channel.send(main)
  }
}