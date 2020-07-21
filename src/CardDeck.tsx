import * as React from 'react';
import { Card } from './components/Card';
class CardDeck extends React.Component {
    render() {

        return (
            <div className="container p-3 bg-dark">
                <div className="card-columns">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>);
    }
}

export { CardDeck };