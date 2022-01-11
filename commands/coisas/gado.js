const Discord = require('discord.js')
const { MessageEmbed }= require('discord.js')

module.exports = {
    name: "gado", // Coloque o nome do comando do arquivo
    aliases: ["muh", "corno"], // Coloque sinônimos aqui

    run: async(client, message, args) => {
        var list = [
            'https://c.tenor.com/EcBswA4sYJQAAAAC/rei-do-gado-cowboy.gif',
            'https://c.tenor.com/an-Zg2_0yewAAAAC/bolsominion-gado.gif',
            'https://thumbs.gfycat.com/LividThirstyGoldeneye-max-1mb.gif'
        ];

        var rand = list[Math.floor(Math.random() *list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]);
        if (!user) {
            return message.reply ('Não esqueça de mencionar um usuario');
        }
          //message.channel.send(`${message.author} **acaba de abraçar** ${user} :hugging:`, {files: [list]});
 
          const embed = new MessageEmbed()
          .setTitle(`😂 Gado 😂`)
          .setDescription(`🐂 ${message.author} acaba de chamar ${user} de gado 🐂`)
          .setImage(rand) 
          .setColor('YELLOW')
          
          message.channel.send({ embeds: [embed]});

    }
}   