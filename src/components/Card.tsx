import * as React from 'react';
import { ICard } from '../Types';
export interface IProps {
    card: ICard
}

const Card: React.FunctionComponent<IProps> = ({ card }) => {
    switch (card.state) {
        case "matched":
            return (
                <div className="card  mb-3 matched" style={{ height: 185 }}>
                    <div className="card-body text-center" style={{ fontSize: 96 }} />
                </div>
            )
        case "selected":
            return (
                <div className="card  selected mb-3" style={{ height: 185 }}>
                    <div className="card-body text-center" style={{ fontSize: 96 }}>{card.content} </div>
                </div >);

        default:
            return (
                <div className="card  unmatched mb-3" style={{ height: 185 }}>
                    <div className="card-body text-center" style={{ fontSize: 96 }}>? </div>
                </div>
            )
    }

}

export { Card };