import * as React from 'react';
import { Card } from './components/Card';
import { ICard, cardState } from './Types';
import _ from "lodash";
import { data } from './data';
import { generateRandomCards } from './helper';
interface IState {
    cards: ICard[];
    count: number;
}
// TO DO: Random Kart oluşturma
// TO DO: Zorluk
// TO DO: Best Score

class CardDeck extends React.Component<{}, IState> {
    selectedCardIds: number[] = [];
    selectedCards: ICard[] = [];
    difficulty: number = 7;
    state: IState = {
        cards: generateRandomCards(this.difficulty),
        count: 0
    }
    cardClickHandler = (card: ICard) => {
        const { cards } = this.state;
        if (this.selectedCardIds.length < 2) {
            this.selectedCardIds.push(card.id);
            this.selectedCards.push(card);
            this.setState({
                ...this.state,
                cards: cards.map(c => c.id === card.id ? card : c)
            }, this.checkMatch)
        }
    }
    checkMatch = () => {
        if (this.selectedCardIds.length === 2) {
            const { cards, count } = this.state;
            setTimeout(() => {
                let newCards: ICard[] = [];
                let nextState: cardState = "unmatched";
                if (this.selectedCards[0].content === this.selectedCards[1].content) {
                    nextState = "matched";
                }
                newCards = cards.map(c => {
                    if (this.selectedCardIds.includes(c.id)) {
                        c.state = nextState;
                    }
                    return c;
                })
                this.selectedCardIds = [];
                this.selectedCards = []
                this.setState({
                    ...this.state,
                    count: count + 1,
                    cards: newCards
                });
            }, 500);
        }
    }
    reset = () => {
        this.selectedCardIds = [];
        this.selectedCards = []
        this.setState({
            ...this.state,
            cards: generateRandomCards(this.difficulty),
            count: 0
        })
    }
    render() {
        const { count, cards } = this.state;
        const cardList = cards.map(c => (<Card key={c.id} card={{ ...c }} clickHandler={this.cardClickHandler} />))
        const columnCount = cards.length === 14 ? 7 : 3
        return (
            <div className="container p-3 bg-dark">
                <span className="text-white">Hamle:{count}</span>
                <hr />
                <div className="card-columns" style={{ columnCount }}>
                    {
                        cardList
                    }
                </div>
                <hr />
                <div className="d-flex justify-content-center">
                    <button onClick={this.reset} className="btn btn-primary mr-3">Sıfırla</button>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-success">Kolay</button>
                        <button type="button" className="btn btn-outline-warning">Orta</button>
                        <button type="button" className="btn btn-outline-danger">Zor</button>
                    </div>
                </div>

            </div>);
    }
}

export { CardDeck };