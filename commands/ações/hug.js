const Discord = require('discord.js')
const { MessageEmbed }= require('discord.js')

module.exports = {
    name: "hug", // Coloque o nome do comando do arquivo
    aliases: ["abraçar"], // Coloque sinônimos aqui

    run: async(client, message, args) => {
        var list = [
            'https://i.imgur.com/wihZ9gN.gif',
            'https://i.imgur.com/r9aU2xv.gif',
            'https://i.imgur.com/nrdYNtL.gif'
        ];

        var rand = list[Math.floor(Math.random() *list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]);
        if (!user) {
            return message.reply ('Não esqueça de mencionar um usuario');
        }
          //message.channel.send(`${message.author} **acaba de abraçar** ${user} :hugging:`, {files: [list]});
 
          const embed = new MessageEmbed()
          .setTitle(`🤗 Abraço 🤗`)
          .setDescription(`💕 ${message.author} acaba de abraçar ${user} 💕`)
          .setImage(rand) 
          .setColor('YELLOW')
          
          message.channel.send({ embeds: [embed]});

    }
}   