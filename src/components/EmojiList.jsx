import React, { Component } from 'react';
import emojis from '../data/emojiList.json';
import '../App.css';

class EmojiList extends Component {
    render() {
        return (
            <div>{emojis
                .filter(element => element.keywords.includes(this.props.searchLine))
                .map(element => <div className="container">
                    <p className="item">{element.symbol}</p>
                    <p className="item">{element.title}</p>

                </div>)}</div>
        )
    }
}

export default EmojiList;