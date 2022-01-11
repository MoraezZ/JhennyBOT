const Discord = require('discord.js')
const { MessageEmbed }= require('discord.js')

module.exports = {
    name: "slap", // Coloque o nome do comando do arquivo
    aliases: ["tapa"], // Coloque sinônimos aqui

    run: async(client, message, args) => {
        var list = [
            'https://i.pinimg.com/originals/2f/0f/82/2f0f82e4fb0dee8efd75bee975496eab.gif',
            'https://c.tenor.com/blbrtpA-HTgAAAAM/tapa.gif',
            'https://acegif.com/wp-content/uploads/funny-anime-gif-74.gif'
        ];

        var rand = list[Math.floor(Math.random() *list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]);
        if (!user) {
            return message.reply ('Não esqueça de mencionar um usuario');
        }
          //message.channel.send(`${message.author} **acaba de abraçar** ${user} :hugging:`, {files: [list]});
 
          const embed = new MessageEmbed()
          .setTitle(`🔥 Tapa 🔥`)
          .setDescription(`😡 ${message.author} **deu um tapa em** ${user} 😡`)
          .setImage(rand) 
          .setColor('YELLOW')
          
          message.channel.send({ embeds: [embed]});

    }
}   