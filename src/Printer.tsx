import * as React from 'react';
interface IProps {
    name: string;
    age?: number;
    isActive: boolean
}
export const Printer: React.FunctionComponent<IProps> = ({ name, age, isActive }) => {
    return <span>{name} - {age}</span>
}