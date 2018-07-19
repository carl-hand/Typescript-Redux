// Declare state types with `readonly` modifier to get compile time immutability
// Thus, in our reducer we won't be able to do something state.num = 9 or we will
// get a compile error (show this in todoReducer.ts
export interface ScoreState {
  readonly score: number;
  readonly name: string;
}
