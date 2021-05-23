const fetch = require('node-fetch')
module.exports = {
    name: '8ball',
    description: "answers your question. Funny? You will see",
    async execute(client, message, args, Discord){
      if(!args[0]) return message.channel.send("Please ask something. Hmm? Meme? No. What you think?")
      const key = process.env.KEY
      const data = await (await fetch('https://api.monkedev.com/fun/8ball?key=' + key)).json();
      const answer = (data.answer);  

    
    const embed = new Discord.MessageEmbed()
        .setTitle(`My answer is..... Wait... ... ...`)
        .setDescription(answer)
        .setColor("GREEN")

        message.channel.send(embed);
  }
};