import * as React from 'react';
import { Card } from './components/Card';
import { ICard } from './Types';
const data: ICard[] = [
    {
        id: 1,
        content: "A",
        state: "unmatched"
    },
    {
        id: 2,
        content: "B",
        state: "selected"
    },
    {
        id: 3,
        content: "B",
        state: "matched"
    },
    {
        id: 4,
        content: "A",
        state: "unmatched"
    },
]
class CardDeck extends React.Component {
    render() {
        const cardList = data.map(c => (<Card key={c.id} card={c} />))
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