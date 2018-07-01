import React, { Component } from 'react';
import './Enter.css';

export class Enter extends React.Component{
    constructor(props){
        super(props)
        this.handleEnterClick = this.handleEnterClick.bind(this);
        this.state = {message: ""}
    }

    handleEnterClick(){
        let reg = /^[a-z]{1,}.{0,}?$/;
        let userInput = this.refs.nickname.value;
        if (!reg.test(userInput)){
            if (userInput.length == 0){
                this.setState({message: "Enter your nickname!"});
            }else {
                this.setState({message: "Nickname must begin with letter!"});
            }
        }
        else {
            this.setState({message: ""});
            this.props.enter()
        }


    }

    render(){
        return(
            <div className="Enter">
                <h2 className="Enter__title">Enter</h2>
                <input type="text" ref="nickname" placeholder="Your nickname" className="Enter__input"/>
                <div className="Enter__message">{this.state.message}</div>
                <button onClick={this.handleEnterClick} className="Enter__button">Let's go!</button>
            </div>
        )
    }
}
