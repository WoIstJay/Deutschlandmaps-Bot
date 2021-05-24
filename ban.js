module.exports = {
  name: 'ban',
  cooldown: 0,
  permitions: "BAN_MEMBERS",
  description: "This command ban's a member!",
  execute(client, message, args) {
    if(message.member.permissions.has("BAN_MEMBERS")) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      if (memberTarget === message.member) {
        message.channel.send('You cannot ban yourself');
        return
      } if (!memberTarget.permissions.has("ADMINISTRATOR")) {
      memberTarget.ban();
      message.channel.send("***The user has been banned***")
      } else {
                message.channel.send('**You can\'t ban that member!**')
                return
              }
    } else {
      message.channel.send("Please @mention the user you want to ban.");
    }
    } else {
      message.channel.send("**You can't use this command/You don't have permissions**")
    }
  }
}