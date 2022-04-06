const Discord = require("discord.js");
//Import Packages

module.exports = {
   name: "purge",
   //Name Of The Command
   aliases: ["clear", "delete", "clr","dlt","prg"],
   //Aliases For Command.
   cooldowns: 1000, //1 second
   //Cooldown For The Command [Milliseconds]
   description: "This Command Tells About You",
   //Description Of The Command [The Purpose Etc...]
   usage: "<user>",
   //Usage For Command. [like ?nameOfTheCommand <user> <reason>]
   toggleOff: false,
   //Disable The Command If Emergency. [true = off | false = on]
   developersOnly: false,
   //If Command Is Only For Bot Owners. [true = yes | false = no]
   /*
    To Make Yourself Developer, Go Ahead to 
    botconfig/main.json, set the ids in it. 
*/
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   //Permissions Required For The Author To Use The CMD.
   botpermissions: ["ADMINISTRATOR"],
   //Permissions Required For The Bot To Run The CMD.

   run: async (client, message, args) => {
    var amount = parseInt(args[0])

        if (!amount) return message.channel.send("Please specify the amount of messages you want me to delete")
        if (amount > 1000 || amount < 1) return message.channel.send("Please select a number *between* 1000 and 1")

        message.channel.bulkDelete(amount).catch(err => {
            message.channel.send(':x: Due to Discord Limitations, I cannot delete messages older than 14 days') })

        let msg = await message.channel.send(`Deleted \`${amount}\` messages`)
        setTimeout(() => {
            msg.delete()
        }, 2000);
   },
};
