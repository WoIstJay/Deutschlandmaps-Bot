const Discord = require("discord.js")
const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: "help",
  cooldown: 0,
  permitons: "SEND_MESSAGES",
  description: "Shows help menu",
  async execute(client, message, args, Discord, db, Database) {
    const custom_prefix = await db.get(`${message.guild.id}-prefix`) || ';'

if(!args[0]){

    const main = new Discord.MessageEmbed()
    .setTitle("**Help menu**")
    .setDescription(`The server prefix is \`${custom_prefix}\``)
      .addFields({
              name: '**🔒Moderator**',
              value: 'This are moderator commands. They can help you moderate the server.',
              inline: true
            }, {
              name: '**🖼Image Commands**',
              value: 'This are image commands This commands can do things like send your avatar and add efects',
              inline: true
            }, {
              name: '**😂Fun Commands**',
              value: 'Funny Commands',
              inline: true
            },{
              name: '**📟Server Commands**',
              value: 'This is a Server command. Use this if u want info about the server',
              inline: true
            }, {
              name: '**🔗Other Commands**',
              value: 'Other Commands with no category',
              inline: true
            }, {
              name: '**🛠Soon Command**',
              value: 'This command will be added soon!',
              inline: true
            })
    message.channel.send(main)
} else if(args[0] == "moderator"){
    const mod = new Discord.MessageEmbed()
    .setTitle("**Help menu | Moderator Commands**")
    .setDescription(`The server prefix is \`${custom_prefix}\``)
      .addFields({
              name: '**;kick**',
              value: 'Kicks a member',
              inline: true
            }, {
              name: '**;ban**',
              value: 'Bans a member',
              inline: true
            }, {
              name: '**Soon**',
              value: 'Work In Progress',
              inline: true
            },{
              name: '**Soon**',
              value: 'Work In Progress',
              inline: true
            }, {
              name: '**Soon**',
              value: 'Work In Progress',
              inline: true
            }, {
              name: '**Soon**',
              value: 'Suggestion? Write your suggestions [here](https://discord.gg/wy6bCbnpW2) in suggestions channel',
              inline: true
            })
    message.channel.send(mod)
    
    message.channel.send(main)
} else if(args[0] == "fun"){
    const mod = new Discord.MessageEmbed()
    .setTitle("**Help menu | Fun Commands**")
    .setDescription(`The server prefix is \`${custom_prefix}\``)
      .addFields({
              name: '**;rick**',
              value: 'Send the lyrics from [Never Gonna Give You Up](https://z.deutschlandmaps.repl.co)',
              inline: true
            }, {
              name: '**;vbucks**',
              value: 'Send free V-Bucks',
              inline: true
            }, {
              name: '**;robux**',
              value: 'Work In Progress',
              inline: true
            }, {
              name: '**;8ball**',
              value: '8ball — No Info',
              inline: true
            }, {
              name: '**Soon**',
              value: 'Suggestion? Write your suggestions [here](https://discord.gg/wy6bCbnpW2) in suggestions channel',
              inline: true
            })
    message.channel.send(mod)
    
    
    message.channel.send(main)
} else if(args[0] == "image"){
    const mod = new Discord.MessageEmbed()
    .setTitle("**Help menu | Image Commands**")
    .setDescription(`The server prefix is \`${custom_prefix}\``)
      .addFields({
              name: '**;servericon**',
              value: 'Send the boticon — BETA',
              inline: true
            }, {
              name: '**;avatar**',
              value: 'Send Avatar',
              inline: true
            }, {
              name: '**;av**',
              value: 'Send avatar, the same like ;Avatar',
              inline: true
            }, {
              name: '**Soon**',
              value: 'W.I.P',
              inline: true
            }, {
              name: '**Soon**',
              value: 'Suggestion? Write your suggestions [here](https://discord.gg/wy6bCbnpW2) in suggestions channel',
              inline: true
            })
    message.channel.send(mod)

    
    message.channel.send(main)
} else if(args[0] == "server"){
    const mod = new Discord.MessageEmbed()
    .setTitle("**Help menu | Server Commands**")
    .setDescription(`The server prefix is \`${custom_prefix}\``)
      .addFields({
              name: '**;servericon**',
              value: 'Send the servericon',
              inline: true
            }, {
              name: '**;host**',
              value: 'Send data about the host',
              inline: true
            }, {
              name: '**;ticket**',
              value: 'Create a ticket — BETA/SOON — Not available',
              inline: true
            }, {
              name: '**;serverinfo**',
              value: 'Send infos about the server',
              inline: true
            }, {
              name: '**Soon**',
              value: 'Suggestion? Write your suggestions [here](https://discord.gg/wy6bCbnpW2) in suggestions channel',
              inline: true
            })
    message.channel.send(mod)
    
    
    message.channel.send(main)
} else if(args[0] == "soon"){
    const mod = new Discord.MessageEmbed()
    .setTitle("**Help menu | Server Commands**")
    .setDescription(`The server prefix is \`${custom_prefix}\``)
      .addFields({
              name: '**;soon**',
              value: 'Send a list with soon commands',
              inline: true
            }, {
              name: '**;update**',
              value: 'Send a update list',
              inline: true
            })
    message.channel.send(mod)


    message.channel.send(main)
} else if(args[0] == "other"){
    const mod = new Discord.MessageEmbed()
    .setTitle("**Help menu | Other Commands**")
    .setDescription(`The server prefix is \`${custom_prefix}\``)
      .addFields({
              name: '**;test**',
              value: 'Test Command',
              inline: true
            }, {
              name: '**;deutschlandmaps**',
              value: 'Send invite to <@824955490043822111>s [Discord Server](https://dsc.gg/deutschlandmaps).',
              inline: true
            }, {
              name: '**;commands**',
              value: 'Send a link to the command list',
              inline: true
            }, {
              name: '**;credits**',
              value: 'Send the bot credits.',
              inline: true
            }, {
              name: '**;invite**',
              value: 'Send the bot invite.',
              inline: true
            }, {
              name: '**;support**',
              value: 'Send the invite to the bot support.',
              inline: true
            }, {
              name: '**;error**',
              value: 'Send a list of error commands.',
              inline: true
            }, {
              name: '**;botinfo**',
              value: 'Send the botinfo.',
              inline: true
            }, {
              name: '**;utilities**',
              value: 'Send invite from [utilities bot](https://discord.com/oauth2/authorize?client_id=826795698095390733&permissions=8&scope=bot).',
              inline: true
            }, {
              name: '**;quex**',
              value: 'Send the invite from [Quex](https://dsc.gg/quex-bot) (Bot).',
              inline: true
            })
    message.channel.send(mod)

}
  }
}