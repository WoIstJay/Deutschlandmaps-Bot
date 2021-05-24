module.exports = {
  name: "invite",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "server commands",
  description: "This sends a bot invite",
  async execute(client, message, args, Discord, db, Database) {
   const main = new Discord.MessageEmbed()
    .setTitle("**Invite Link**")
    .setDescription(`Special thanks for all people inviting this bot`)
      .addFields({
              name: 'Invite',
              value: 'You want to invite me? Thanks, then [click here](https://discordapp.com/api/oauth2/authorize?client_id=834118277742592011&permissions=8&scope=bot) to invite this bot. ',
              
              inline: false
            })
    message.channel.send(main)

   
    
  }
}