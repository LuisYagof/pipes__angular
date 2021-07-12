export enum Color {
  red = 1, black, blue, green
}

export interface Heroe {
  name: string;
  flies: boolean;
  color: Color;
}