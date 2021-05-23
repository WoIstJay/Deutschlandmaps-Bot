module.exports = {
  name: "servericon",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "text commands",
  description: "servericon",
  execute(client, message, args, Discord, db, Database) {
    var serverName = message.guild.name
    var serverIcon = message.guild.iconURL() || `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random()* 5)}.png`;
const avatarEmbed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor("DM Bot")
    .setTitle(`${serverName}'s icon`)
    .setImage(serverIcon)

message.channel.send(avatarEmbed);
  }
}