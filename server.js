const WebSocketServer = new require("ws");
const webSocketServer = new WebSocketServer.Server({ port: 5001 });

class User{
	constructor(id, nickname, status){
		this.nickname = nickname;
		this.status = status;
        this.cards = [];
    }
}

var users = [];
let maxId = 0;

webSocketServer.on("connection", function(ws) {
    console.log("NEW USER CONNECTED!");

    ws.on("message", function(message) {
        console.log("NEW MESSAGE!");
        console.log("messageObjective = ", message.messageObjective);
        if (message.messageObjective === "sendNickname"){
            let newUser = new User(maxId++, message.data.nickname, "free");
            users[ws] = newUser;
        }
    });

    ws.on("close", function() {
        console.log("USER DISCONNECTED!");
    });
})
