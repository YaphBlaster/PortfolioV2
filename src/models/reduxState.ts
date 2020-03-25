export interface StoreState {
  main: MainState;
}

export interface MainState {
  value: number;
  hasVisited: boolean;
}
