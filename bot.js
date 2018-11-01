const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"// البرفكس هنا

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Diamond Codes')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Diamond Codes`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Diamond Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#تقديم | DiamondBotList`,"http://twitch.tv/S-F")
client.user.setStatus("online")
 
});

client.on('message', async rokz => {
 
    if(rokz.content.startsWith(prefix + "تقديم")) {
 
      let lang = '';
 
      let time = '';
 
      let expe = '';
 
      let fillter = m => m.author.id === rokz.author.id
 
      await rokz.channel.send("اسم بوتك ؟").then(e => {
 
     rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
 
     .then(co => {
 
       lang = co.first().content;
 
        co.first().delete();
 
 
       e.edit(`ما هي ميزاته ؟
[${lang}]`)
 
       rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
 
       .then(col => {
 
         time = col.first().content;
 
          col.first().delete();
 
 
            e.edit(`رابط دعوة البوت
[${time}]
[${lang}]`)
 
            rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
 
            .then(coll => {
 
              expe = coll.first().content;
 
               coll.first().delete();
 
 
               e.edit(`جاري تقديمك...
[${expe}]
[${time}]
[${lang}]`)
 
              let rokzz = rokz.guild.channels.find("name","✽-تقديمات")
 
              setTimeout(() => {
 
                e.edit("تم التقديم")
 
              }, 3000)
 
              rokzz.send(`
» اللغة : **${lang}**
» المدة : **${time}**
» الخبرة : **${expe}**
تم التقديم بواسطة: ${rokz.author}
`).then(rokzzz => {
 
                  rokzzz.react(":CheckMark:")
 
                  rokzzz.react(":WrongMark:")
 
                })
 
            })
 
       })
 
     })
 
   })
 
    }
 
  })
 
 
 
   
 
   
client.on('message',async message => {
 
let mention = message.mentions.members.first();
 
let Room = client.channels.get('507228868965433365');
 
if(message.content.startsWith(prefix + "رفض")) {
 
if(message.guild.id !== '507224549516115969') return;
 
 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
 
 
if(!mention) return message.reply("منشن شخص");
 
 
 
Room.send(`
**» العضو :** ${mention}
[ :x: ] :: لقد تم رفض البوت`);
 
}
 
});
 
 
   
client.on('message',async message => {
 
let mention = message.mentions.members.first();
 
let Room = client.channels.get('507228868965433365');
 
if(message.content.startsWith(prefix + "قبول")) {
 
if(message.guild.id !== '507224549516115969') return;
 
 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
 
 
if(!mention) return message.reply("منشن شخص");
 
 
 
Room.send(`
**» العضو :** ${mention}
[ :white_check_mark: ] :: لقد تم قبول البوت `);
 
}
 
});

client.login(process.env.BOT_TOKEN);
