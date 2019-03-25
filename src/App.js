import React, { Component } from 'react';
import EmojiList from './components/EmojiList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLine: ''
        }
    }

    changeSearchLine(text) {
        this.setState({
            searchLine: text
        });
    }

    render() {
        return (
            <div>
                <p className="App-header"> 😄 Emoji Search 😲</p>
                <input type="text" onChange={(e) => this.changeSearchLine(e.target.value)}></input>
                <EmojiList searchLine={this.state.searchLine} />
            </div>
        )
    }
}

export default App;