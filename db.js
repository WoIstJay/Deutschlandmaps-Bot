const Discord = require('discord.js');
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "db",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  description: "Secret command :)",

  async execute(client, message, args, Discord, db, Database) {
    if (message.member.id != "715587947717722183" && message.member.id != "824955490043822111") { 
      message.channel.send(":no_entry_sign: Sorry, only **bot owner** can run this command. :no_entry_sign: ") 
    } else {
      
      if(args[0] === 'get') {
        const text = args.slice(1).join(' ')
        const result = await db.get(`${text}`)
        message.channel.send(`Here is your result: ${result}`)
      } else if (args[0] === 'delete') {
        const text = args.slice(1).join(' ')
        const result = await db.get(`${text}`)
        message.channel.send(`${text} has been deleted.`)
        db.delete(`${args[1]}`).then(() => {});
      } else if(args[0] === 'set') {
        const value = args.slice(2).join(' ')
        const result = await db.get(`${args[1]}`)
        message.channel.send(`Changed key to ${value}.`)
        db.set(`${args[1]}`, `${value}`).then(() => {});
      } else if(args[0] === 'list') {
        const fetch = require('node-fetch');
          const list = await db.getAll()
          const list2 = JSON.stringify(list, null, 2)
          console.log(list)
          message.channel.send(` \`\`\`json\n ${list2} \n \`\`\` `)
  
      }
    }

  }
}