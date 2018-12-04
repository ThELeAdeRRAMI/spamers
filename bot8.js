 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("507989504888406022")
setInterval(function() {
channel.send(`ThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeRThE_LeAdeR`);
}, 30)
})
client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "30say") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "tell") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login(process.env.BOT_TOKEN8); 
