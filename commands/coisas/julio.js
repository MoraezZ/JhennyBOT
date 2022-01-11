module.exports = {
    name: "julio", // Coloque o nome do comando do arquivo
    aliases: ["Julio, Júlio, júlio"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        if (!args[0]) return message.reply(`Escreva uma pergunta.`);
        let respostas = ["sei lá", "talvez", "an?", "quem?", "sim", "não", "claro que sim", "claro que não", "não tenho idéia", "não pergunte isso pra mim", "que?", "por que?", "que isso?", "e eu lá sou vidente?", "não sei", "nao sei"];
        let resposta = respostas[Math.floor(Math.random()*respostas.length)];

        try {

        message.channel.createWebhook('Eu mesmo, Julio', {
            avatar: 'https://media.discordapp.net/attachments/876856780565651458/909625694542237726/coronga.jpg',

        }).then(web => {
            web.send(`${message.author} ${resposta}`)
            .then(()=> {web.delete() })
        })


    } catch (e) { console.log(e); message.reply(`Eu estou sem a permissão de criar webhooks.`) }
        

       
        
    }
}