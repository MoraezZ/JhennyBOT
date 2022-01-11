const Discord = require("discord.js")

module.exports = {
    name: "ship", // Coloque o nome do comando do arquivo
    aliases: ["couple"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        let membro_1 = message.mentions.users.first() || client.users.cache.get(args[0]);
        let membro_2 = message.mentions.users.last() || client.users.cache.get(args[1]);

        var gif = 'https://pa1.narvii.com/6899/6ab302dba5eba23634f513dad0760343abef3832r1-496-280_hq.gif';

        let embed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setAuthor(`Comando de Ship`, message.author.displayAvatarURL({dynamic:true}))
        .addFields(
            {
                name: `⁉ Como funciona?`,
                value: `\`!ship (usuario)\` ou \`!ship (usuario 1) (usuario 2)\``,
                inline: false
            },
            {
                name: `🤓 Explicação:`,
                value: `O bot shippará dois usuários escolhidos por você.`,
                inline: false
            }
        );

        if (!membro_1 || !membro_1 && !membro_2 || !args[0]) return message.reply({ content: `${message.author}`, embeds: [embed] });

        let numeracao = `${Math.ceil(Math.random()*100)}%`;

        if (membro_1 && !membro_2) {

            membro_2 = message.author;
            if (membro_1 === membro_2) membro_2 = message.author;

            let embed = new Discord.MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic:true}))
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            );

            message.reply({ content: `${message.author}`, embeds: [embed] }).then(msg=>{
                msg.react("💘")

                let filtro = (e, r) => e.emoji.name === "💘" && r.id === membro_1.id;
                let coletor = msg.createReactionCollector({filter: filtro});

                coletor.on('collect', () => {

             let embed = new Discord.MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic:true}))
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            )
            .setImage(gif);

                    msg.edit({ content: `${membro_1} ${membro_2}`, embeds: [embed] })
                })

            })

        }

        else

        if (membro_1 && membro_2) {

            if (membro_1 === membro_2) membro_2 = message.author;

            if (membro_2 === client.user || membro_1 === client.user) {

                let embed = new Discord.MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic:true}))
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            );

            message.reply({ content: `${message.author}`, embeds: [embed] }).then(msg=>{
                msg.react("💘")
            })

            }

            else

            {

            let embed = new Discord.MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic:true}))
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            );

            message.reply({ content: `${message.author}`, embeds: [embed] }).then(msg=>{
                msg.react("💘")

                let filtro = (e, r) => e.emoji.name === "💘" && r.id === membro_1.id;
                let coletor = msg.createReactionCollector({filter: filtro});

                coletor.on('collect', () => {

             let embed = new Discord.MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic:true}))
            .addFields(
                {
                    name: `😍 Membros shippados:`,
                    value: `${membro_1} + ${membro_2}`,
                    inline: false
                },
                {
                    name: `💖 Porcentagem:`,
                    value: `\`${numeracao}\``,
                    inline: false
                },
            )
            .setImage(gif);

                    msg.edit({ content: `${membro_1} ${membro_2}`, embeds: [embed] })
                })

            })

        }

        }

        
    }
}