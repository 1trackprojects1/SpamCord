const Discord = require('discord.js');
const request = require("request");


console.log('[server] SpamCord v2 CLI Started!')

var spammessage = ""; // the message you want to spam.
var channel_id = ""; // the id of the channel you want to spam.
var tokenone = ""; // raidbot token.
var tokentwo = ""; // raidbot token.
var tokenthree = ""; // raidbot token.
var tokenfour = ""; // raidbot token.
var invitecode = "" // the invite code to the server you want to raid.

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const botone = new Discord.Client();
const bottwo = new Discord.Client();
const botthree = new Discord.Client();
const botfour = new Discord.Client();

botone.on("ready", () => {
    console.log(`[BOT] ${botone.user.username} Ready!`);
    request({
            method: "POST",
            url: "https://discordapp.com/api/v6/invite/" + invitecode,
            headers: {
                authorization: tokenone
            }
        })
        console.log('[System] Sent Invite Request!')
    function send() {
        request({
            method: "POST",
            url: "https://discordapp.com/api/v6/channels/" + channel_id + "/messages",
            headers: {
                authorization: tokenone
            },
            form: {content:spammessage}
        })
    }
    setInterval(function() {
        send()
    }, 1000)
    console.log('[System] Sent Message Request!')
});

bottwo.on("ready", () => {
    console.log(`[BOT] ${bottwo.user.username} Ready!`);
    request({
            method: "POST",
            url: "https://discordapp.com/api/v6/invite/" + invitecode,
            headers: {
                authorization: tokentwo
            }
        })
        console.log('[System] Sent Invite Request!')
    function send() {
        request({
            method: "POST",
            url: "https://discordapp.com/api/v6/channels/" + channel_id + "/messages",
            headers: {
                authorization: tokentwo
            },
            form: {content:makeid()}
        })
    }
    setInterval(function() {
        send()
    }, 2000)
});

botthree.on("ready", () => {
    console.log(`[BOT] ${botthree.user.username} Ready!`);
    request({
            method: "POST",
            url: "https://discordapp.com/api/v6/invite/" + invitecode,
            headers: {
                authorization: tokenthree
            }
        })
        console.log('[System] Sent Invite Request!')
    function send() {
        request({
            method: "POST",
            url: "https://discordapp.com/api/v6/channels/" + channel_id + "/messages",
            headers: {
                authorization: tokenthree
            },
            form: {content:spammessage}
        })
    }
    setInterval(function() {
        send()
    }, 1000)
    console.log('[System] Sent Message Request!')
});

botfour.on("ready", () => {
    console.log(`[BOT] ${botfour.user.username} Ready!`);
    request({
            method: "POST",
            url: "https://discordapp.com/api/v6/invite/" + invitecode,
            headers: {
                authorization: tokenfour
            }
        })
        console.log('[System] Sent Invite Request!')
    function send() {
        request({
            method: "POST",
            url: "https://discordapp.com/api/v6/channels/" + channel_id + "/messages",
            headers: {
                authorization: tokenfour
            },
            form: {content:spammessage}
        })
    }
    setInterval(function() {
        send()
    }, 1000)
    console.log('[System] Sent Message Request!')
});

botone.login(tokenone).catch(e => {
    console.log("[Error] Invalid token For BotONE!");
});

bottwo.login(tokentwo).catch(e => {
    console.log("[Error] Invalid token For BotTWO!");
});

botthree.login(tokenthree).catch(e => {
    console.log("[Error] Invalid token For BotTHREE!");
});

botfour.login(tokenfour).catch(e => {
    console.log("[Error] Invalid token For BotFour!");
});




