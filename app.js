var client = require('../nodeclient')();

client.host = "127.0.0.1";
client.command = "test";
client.port = "8086";

client.onRecieve(function(answer){
    answer.send("It's working!");
});

client.ready(function(){
     client.register(function (error, success) {
        if(error != null)
            console.error(error);
        else{
            console.log("Registered!");
        } 
    });
});

client.start();