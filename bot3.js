const Discord = require('discord.js');
const client = new Discord.Client();


const prefix = "1"
const devs = ['463450251525750796']


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "507275523349676032"; // ايدي السررفر
var channel = "507275523349676034";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** ThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeR **')
    },305);
})



client.on('ready', async() => {
var server = "507275523349676032"; // ايدي السررفر
var channel = "507275523349676034";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "507275523349676032"; // ايدي السررفر
var channel = "507275523349676034";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@463450251525750796>')
    },8.64e+7);
})


client.on('message', message => {
if(message.content.startsWith(prefix + 's')) {
if(message.author.id !== "463450251525750796") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 

client.on('message', message => {
	if(message.content === '1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
	if(message.content === '2'){
        message.channel.send('#credit')
    }
});

client.on('message', message => {
	if(message.content === '3'){
        message.channel.send('#rep <@463450251525750796>')
    }
});

client.on('message', message => {
     if(message.content === '4'){
        message.member.voiceChannel.join();
    }
});


client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
if (message.content.startsWith('setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "25say") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});

client.login(process.env.BOT_TOKEN3); 
