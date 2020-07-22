import { letters } from "./data"
import _ from "lodash";
import { ICard } from "./Types";

export const generateRandomCards = (size: number) => {
    const sliced = letters.slice(0, size);
    const nCards = _.shuffle([...sliced, ...sliced]);

    const mapped: ICard[] = nCards.map((content, index) => {
        return {
            content,
            id: index,
            state: "unmatched"
        }
    })
    console.log(mapped);
    
    return mapped;
}