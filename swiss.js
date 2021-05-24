const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "swiss-sec",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "fun commands",
  description: "SwissSec🇨🇭",
  async execute(client, message, args, Discord, db, Database) {
    const main = new Discord.MessageEmbed()
    .setTitle("**SwissSec🇨🇭🧀🍫**")
    .setDescription(`Follow <@733738907622965381> at Intersection Controller and [YouTube](https://youtube.com/channel/UCTchaKUNeCZVPkYvRPbBgEg).\nAnd join his [Discord](https://dsc.gg/swiss-sec)`)

      
    message.channel.send(main)
  }
}