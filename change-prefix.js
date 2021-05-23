const Discord = require('discord.js');
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: 'prefix',
  cooldown: 0,
  description: "With this command you can change the server prefix!",
  async execute(client, message, args, Discord, prefix) {
    const prefix5 = await db.get(`${message.guild.id}-dat`) || '_'
    const prefix6 = prefix5.split(',')
    const prefix2 = prefix6[2]
    if(!args[0]) {
    const PrefixEmb = new Discord.MessageEmbed() 
    .setTitle('Prefix')
    .setColor('#75f542')
    .setDescription(`The prefix is \`${prefix2}\`.To change the bot prefix, send ;prefix [newprefix]`)
    .setFooter("")
    message.channel.send(PrefixEmb)
    } else {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have permitions to change the prefix")

        var op = prefix2
        if(args[0].length != '1') return message.channel.send("⚠️The prefix cannot contain more than **1** character⚠️")

         const embed = new Discord.MessageEmbed()
          .setTitle('Prefix')
          .setColor('#38a63a')
          .addFields(
            {name: 'Old Prefix', value: `${op}`, inline: true},
            {name: 'New Prefix', value: `${args[0]}`, inline: true},
          )
          .setFooter("Bot Prefix")
            message.channel.send(embed);
        const data = await db.get(`${message.guild.id}-dat`) || '0,0,;'
        const datb = data.split(',')
        const dat0 = datb[0]
        const dat1 = datb[1]
        const dat = data.replace(prefix2,args[0])
        await db.set(`${message.guild.id}-dat`, `${dat}`)
    }
  }
    
}
