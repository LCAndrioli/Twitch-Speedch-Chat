var tmi = require('tmi.js');
var say = require('say');

//Bot connection options
var options = {
    options: {
        debug: false
    },
    connection: {
        cluster: 'aws',
        reconnect: true
    },
    identity: {
        username: "Teteu",
        password: "oauth:bm6jxxbyys49pnjujooayzwb0yfx6c"
    },
    channels:["lil_kuro"]
}
var client = new tmi.client(options);
client.connect();

console.log("\n\n\t\tBot online.\n");
say.speak("bote onleine");

client.on("chat", function (channel, userstate, massage, self) {
    console.log("\n" + userstate.username + " > " + massage);
    say.speak(massage);
});