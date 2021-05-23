const Discord = require("discord.js")
module.exports = {
  name: 'serverinfo',
  description: "Says the serverinfo",
  execute(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
            .setTitle("Server Info")
            .setColor("#e1fcd4")
            .setThumbnail(message.guild.iconURL())
            .setDescription(`${message.guild}'s information`)
            .addField("Owner:", `${message.guild.owner}`)
            .addField("Member Count:", `${message.guild.memberCount} `)
            .addField("Roles Count:", `${message.guild.roles.cache.size} `)
            

        message.channel.send(embed)

  }
}