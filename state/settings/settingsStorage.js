import AsyncStorage from "@react-native-async-storage/async-storage";

const SETTINGS_STORAGE_KEY = "quiztracker.settings";

export const loadPersistedSettings = async () => {
  try {
    const raw = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const persistSettings = async (settings) => {
  try {
    await AsyncStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch {}
};

export const clearPersistedSettings = async () => {
  try {
    await AsyncStorage.removeItem(SETTINGS_STORAGE_KEY);
  } catch {}
};
