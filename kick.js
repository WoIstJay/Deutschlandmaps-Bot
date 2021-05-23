module.exports = {
  name: 'kick',
  description: "This command kick's a member!",
  permitions: "KICK_MEMBERS",
  execute(client, message, args) {
    if(message.member.permissions.has("KICK_MEMBERS")) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      if (memberTarget === message.member) {
        message.channel.send('You cannot kick yourself');
        return
      } if (!memberTarget.permissions.has("ADMINISTRATOR")) {
        memberTarget.kick();
      message.channel.send("***The user has been kicked***")
      } else {
                message.channel.send('**You can\'t kick that member**')
                return
              }
    } else {
      message.channel.send("Please @mention the user you want to kick.");
    }
    } else {
      message.channel.send("**You can't use this command/You don't have permissions!**")
    }
  }
}