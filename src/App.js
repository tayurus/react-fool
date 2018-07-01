import React, { Component } from "react";
import { Enter } from "./Components/Enter/Enter.js";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { logged: false };

        this.enter = this.enter.bind(this);
    }

    enter() {
        this.setState({ logged: true });
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
