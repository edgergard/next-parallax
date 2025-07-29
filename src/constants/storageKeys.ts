export const SESSION_STORAGE_KEYS = {
  LEADERBOARD: "leaderboard",
};

export type StorageKey = keyof typeof SESSION_STORAGE_KEYS;

export interface StorageSchema {
  LEADERBOARD: {
    shownRowsCount: number
  }
}