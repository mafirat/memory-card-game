import * as React from 'react';
import { Card } from './components/Card';
import { ICard, cardState, Difficulty, IBestScore } from './Types';
import _ from "lodash";
import { data } from './data';
import { generateRandomCards, getBestScoreFromLocal } from './helper';
import { Menu } from './components/DifficultyMenu';
import { config } from 'process';
import { configDifficulty } from './configDifficulty';
interface IState {
    cards: ICard[];
    count: number;
    bestScore: IBestScore;
}
// TO DO: Random Kart oluşturma
// TO DO: Zorluk
// TO DO: Best Score

class CardDeck extends React.Component<{}, IState> {
    selectedCardIds: number[] = [];
    selectedCards: ICard[] = [];
    difficulty = Difficulty.easy;
    state: IState = {
        cards: generateRandomCards(this.difficulty),
        count: 0,
        bestScore: getBestScoreFromLocal()
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
    setDifficulty = (difficulty: Difficulty) => {
        this.difficulty = difficulty;

        this.selectedCardIds = [];
        this.selectedCards = []
        this.setState({
            ...this.state,
            cards: generateRandomCards(this.difficulty),
            count: 0
        })
    }
    render() {
        const { count, cards, bestScore} = this.state;
        const cardList = cards.map(c => (<Card key={c.id} card={{ ...c }} clickHandler={this.cardClickHandler} />))
        const columnCount = configDifficulty[Difficulty[this.difficulty]].column;
        return (
            <div className="container p-3 bg-dark">
                <div className="d-flex justify-content-between">
                    <div className="col"><span className="text-white">Hamle:{count}</span></div>
                    <div className="col"><span className="text-white">En iyi Skor:{bestScore[Difficulty[this.difficulty]]}</span></div>
                </div>
                <hr />
                <div className="card-columns" style={{ columnCount }}>
                    {
                        cardList
                    }
                </div>
                <hr />
                <div className="d-flex justify-content-center">
                    <button onClick={this.reset} className="btn btn-primary mr-3">Sıfırla</button>
                    <Menu setDiffHandler={this.setDifficulty} />
                </div>

            </div>);
    }
}

export { CardDeck };