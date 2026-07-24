import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, Battle, Character } from '@types';

interface GameState {
  player: Player | null;
  characters: Character[];
  currentCharacter: Character | null;
  battle: Battle | null;
  isConnected: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  player: null,
  characters: [],
  currentCharacter: null,
  battle: null,
  isConnected: false,
  loading: false,
  error: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<Player>) => {
      state.player = action.payload;
    },
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
    setBattle: (state, action: PayloadAction<Battle>) => {
      state.battle = action.payload;
    },
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetGame: (state) => initialState,
  },
});

export const {
  setPlayer,
  setCharacters,
  setBattle,
  setConnected,
  setLoading,
  setError,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
