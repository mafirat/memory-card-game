import * as React from 'react';
import { Difficulty } from '../Types';
interface IProps {
    setDiffHandler: (dlevel: number) => void;
}

export const Menu: React.FunctionComponent<IProps> = ({ setDiffHandler }) => {
    const clickHandler = (size: number) => {
        setDiffHandler(size)
    }
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" onClick={() => clickHandler(Difficulty.easy)} className="btn btn-outline-success">Kolay</button>
            <button type="button" onClick={() => clickHandler(Difficulty.normal)} className="btn btn-outline-warning">Orta</button>
            <button type="button" onClick={() => clickHandler(Difficulty.hard)} className="btn btn-outline-danger">Zor</button>
        </div>
    );
}
