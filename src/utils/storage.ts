import type { StorageKey, StorageSchema } from "@/constants/storageKeys";

export function setSessionStorage<K extends StorageKey>(
  key: K,
  value: StorageSchema[K],
): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage<K extends StorageKey>(
  key: K,
): StorageSchema[K] | null {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function removeSessionStorage<K extends StorageKey>(key: K): void {
  sessionStorage.removeItem(key);
}
