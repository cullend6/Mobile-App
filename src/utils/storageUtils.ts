import { AsyncStorage } from 'react-native';

export const save = async (key: string, payload: any) => {
    try {
        console.log(`Saving document ${key}...`)
        const savedDocument = await AsyncStorage.setItem(key, JSON.stringify(payload));
        return savedDocument;
    } catch (err) {
        return `Error saving document ${key}: Error: ${err?.message}`
    }
}

export const get = async (key: string) => {
    console.log(`Getting document ${key}`)
    const document = await AsyncStorage.getItem(key);
    return JSON.parse(document);
}

export const getAllKeys = async () => {
    const documents = await (AsyncStorage.getAllKeys());
    return Promise.all(documents);
}