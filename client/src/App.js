import React, { Component } from "react";
import { Enter } from "./Components/Enter/Enter.js";
import "./App.css";

class App extends Component {
    socket = "";

    constructor(props) {
        super(props);
        this.state = { logged: false };
        this.enter = this.enter.bind(this);
    }

    enter(nickname) {
        this.setState({ logged: true });
        this.socket = new WebSocket("ws://localhost:5001");
        let obj = {
            messageObjective: "sendNickname",
            data: {
                nickname: nickname
            }
        }
        this.socket.onopen = () => this.socket.send(JSON.stringify(obj))
    }

    render() {
        return (
            <div className="App">
                {this.state.logged ? "" : <Enter enter={this.enter} />}
            </div>
        );
    }
}

export default App;
