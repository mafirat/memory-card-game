export type cardState = "unmatched" | "matched" | "selected"
export interface ICard {
    id: number;
    content: string;
    state: cardState;
}