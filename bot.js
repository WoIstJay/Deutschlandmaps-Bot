const Discord = require('discord.js');
const Database = require("@replit/database");
const db = new Database();
const moment = require('moment');

module.exports = {
  name: "bot",
  cooldown: 0,
  description: "Secret command :)",

  async execute(client, message, args, Discord, db, Database) {
    if (message.member.id != "715587947717722183" && message.member.id != "808332746711760957") { 
      message.channel.send(":no_entry_sign: Sorry, only **bot owner** can run this command. :no_entry_sign: ") 
    } else {
      if(args[0] === 'set_activity') {
        const type = args[1]
        const activity = args.slice(2).join(' ')
        if(type === 'PLAYING' || type === 'WATCHING' || type === 'LISTENING') {
          const Embed1 = new Discord.MessageEmbed ()
          .setTitle("Bot activity")
          .setDescription(`Bot activity was set to ${activity}`)
          .setColor("RANDOM")
        message.channel.send(Embed1)
        client.user.setActivity(activity, { type: type })
        } else {
          message.channel.send(`${type} is not a valid type of activity.`)
        }

      } else if (args[0] === 'default-prefix') {
        const Database = require("@replit/database");
        const db = new Database();
        if(!args[1]) return message.channel.send("You must set a prefix.")
        if(args[1] === 'reset') {
           message.channel.send(`The default prefix has been reseted.`)
           await db.set(`default_prefix`, `&`)
           return
        }
        if(args[1].length != '1') return message.channel.send("Default prefix can only be one character.")
        
        const value = args[1]
        await db.set(`default_prefix`, `${value}`).then(() => {message.channel.send(`The default prefix is now ${args[1]}`)});
      } else if (args[0] === 'announce') {
        var time = moment().format("DD/MM/YY - HH:MM:SS")
        const reason = args.slice(1).join(' ')
        const announcementEmbed = new Discord.MessageEmbed()
            .setTitle("Bot announcement")
            .setDescription(reason)
            .setFooter(`Movies22 by TR [Bot owner] - Today at ${time}`)
            .setThumbnail('https://cdn.discordapp.com/avatars/826795698095390733/d0da9aada0be91c52952cf44fdd64977.png?size=256%27')
        client.guilds.cache.forEach((guild) => {

 //This would make the client to send a message "Announcement!" to a channel named "news" in every server, if such a channel didn't exist in a guild, the message wouldn't be sent for that exact guild
 try {
  guild.channels.cache.find((x) => x.id == guild.systemChannel.id).send(announcementEmbed);
 } catch {
  //If message couldn't be sent
  message.channel.send("Message wasn't sent for " + guild.name);
 }
});
      } else if (args[0] === 'server-list') {
        const target = message.guild.members.cache.get(message.author.id);
        target.send("Server list:")
        client.guilds.cache.forEach((guild) => {
          try {
            target.send(`Server name: ${guild.name}`)
            target.send(`Server owner: ${guild.member(guild.owner)}`)
            target.send(`Server member count: ${guild.members.cache.size}`)
            target.send(`Server id: ${guild.id}`)
            target.send("=======================")
 } catch {
  //If message couldn't be sent
  target.send("Message wasn't sent for " + guild.name);
 }

        })
        target.send("End")
      } else if (args[0] === 'leave') {
      message.channel.send("I will now leave the server. Bye.")
      message.guild.leave();
    }

    } 
}
}