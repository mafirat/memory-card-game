import * as React from 'react';
import { Card } from './components/Card';
import { ICard } from './Types';
import { data } from './data';
interface IState {
    cards: ICard[];
}
class CardDeck extends React.Component<{}, IState> {
    selectedCardIds: number[] = [];
    state: IState = {
        cards: data
    }
    cardClickHandler = (card: ICard) => {
        const { cards } = this.state;
        if (this.selectedCardIds.length < 2) {
            this.selectedCardIds.push(card.id);
            this.setState({
                ...this.state,
                cards: cards.map(c => c.id === card.id ? card : c)
            })
        }
    }
    render() {
        const cardList = this.state.cards.map(c => (<Card key={c.id} card={c} clickHandler={this.cardClickHandler} />))
        return (
            <div className="container p-3 bg-dark">
                <div className="card-columns" style={{ columnCount: 2 }}>
                    {
                        cardList
                    }
                </div>
            </div>);
    }
}

export { CardDeck };