module.exports = {
  name: "say",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  category: "text commands",
  description: "Repeats what you sent",
  execute(client, message, args, Discord, db, Database) {
    //lets test it
    const say_message = args.join(" ")
    if(say_message.includes("@everyone") || say_message.includes("@here")) {
      message.channel.send("You can't say that!")
    } else {
      message.channel.send(say_message)
    }
    

  }
}