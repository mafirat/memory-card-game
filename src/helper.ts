import { letters } from "./data"
import _ from "lodash";
import { ICard, IBestScore } from "./Types";

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
    return mapped;
}

export const getBestScoreFromLocal = () => {
    const data = localStorage.getItem("score");
    if (data) {
        return JSON.parse(data) as IBestScore;
    }
    return { easy: null, normal: null, hard: null }
}