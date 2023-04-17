import { useState, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../services/localStorageService';

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    return getFromStorage(key) ?? defaultValue;
  });

  useEffect(() => {
    saveToStorage(key, state);
  }, [key, state]);

  return [state, setState];
}
