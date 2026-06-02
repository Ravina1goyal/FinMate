import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (
  key: string,
  value: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (
  key: string,
): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
    return null;
  }
};