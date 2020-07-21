import * as React from 'react';
export interface IProps {

}

const Card: React.FunctionComponent<IProps> = (props) => {
    return (
        <div className="card border-primary mb-3" style={{height:185}}>
            <div className="card-body text-center" style={{fontSize:96}}>? </div>
        </div>);
}

export { Card };