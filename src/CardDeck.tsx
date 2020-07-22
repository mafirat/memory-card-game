import * as React from 'react';
import { Card } from './components/Card';
import { ICard, cardState } from './Types';
import _ from "lodash";
import { data } from './data';
interface IState {
    cards: ICard[];
    count: number;
}
class CardDeck extends React.Component<{}, IState> {
    selectedCardIds: number[] = [];
    selectedCards: ICard[] = [];
    state: IState = {
        cards: _.cloneDeep(data),
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
            cards: _.cloneDeep(data)
        })
    }
    render() {
        const { count, cards } = this.state;
        const cardList = cards.map(c => (<Card key={c.id} card={{ ...c }} clickHandler={this.cardClickHandler} />))
        return (
            <div className="container p-3 bg-dark">
                <span className="text-white">Hamle:{count}</span>
                <hr />
                <div className="card-columns" style={{ columnCount: 4 }}>
                    {
                        cardList
                    }
                </div>
                <hr />
                <button onClick={this.reset} className="btn btn-primary">Sıfırla</button>
            </div>);
    }
}

export { CardDeck };