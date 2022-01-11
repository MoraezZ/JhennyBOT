const Discord = require('discord.js')
const { MessageEmbed }= require('discord.js')

module.exports = {
    name: "kiss", // Coloque o nome do comando do arquivo
    aliases: ["beijar"], // Coloque sinônimos aqui

    run: async(client, message, args) => {
        var list = [
            'https://i.imgur.com/SOX9Ma1.gif',
            'https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-36.gif',
            'https://acegif.com/wp-content/uploads/anime-kissin-15.gif'
        ];

        var rand = list[Math.floor(Math.random() *list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]);
        if (!user) {
            return message.reply ('Não esqueça de mencionar um usuario');
        }
          //message.channel.send(`${message.author} **acaba de abraçar** ${user} :hugging:`, {files: [list]});
 
          const embed = new MessageEmbed()
          .setTitle(`😘 Beijo 😘`)
          .setDescription(`💋 ${message.author} acaba de beijar ${user} 💋`)
          .setImage(rand) 
          .setColor('YELLOW')
          
          message.channel.send({ embeds: [embed]});

    }
}   