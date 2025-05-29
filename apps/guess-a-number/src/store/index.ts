import create from 'zustand/vanilla';
import type { Message } from './types';

export type GameState = {
  message: Message;
  correctNumber: number;
  guessedNumber: number | null;
  score: number;
  scoreList: number[];
  highest: number;

  setMessage: (message: Message) => void;
  setCorrectNumber: () => void;
  setGuessedNumber: (number: number | null) => void;
  setScore: (score: number) => void;
  setScoreList: (score: number) => void;
  resetScores: () => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  message: {
    text: 'Start guessing...',
  },
  correctNumber: Math.trunc(Math.random() * 20) + 1,
  guessedNumber: null,
  score: 20,
  scoreList: [],
  highest: 0,

  setMessage: (message) => set({ message: message }),
  setCorrectNumber: () => {
    const randNumber = Math.trunc(Math.random() * 20) + 1;
    set({ correctNumber: randNumber });
  },
  setGuessedNumber: (number) => set({ guessedNumber: number }),
  setScore: (score) => set({ score: score }),

  // check scores and set highest
  setScoreList: (score: number) => {
    if (score > get().highest) {
      set({ scoreList: [...get().scoreList, score], highest: score });
    }
  },

  // use to reset the highest
  resetScores: () => {
    set({ highest: 0 });
    set({ scoreList: [] });
  },
}));
