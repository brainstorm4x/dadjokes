import React, {Component} from 'react';
import axios from "axios";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {deck: null}
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}new/shuffle/?deck_count=1`)
        this.setState({deck: deck.data});
    }

    render() {
        return(<h1>Dad Jokes!</h1>)
    }
}

export default Deck;