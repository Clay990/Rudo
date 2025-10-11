
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useContext } from "react";


const ThemeContext = createContext<{ theme: string; changeTheme: (newTheme: string) => Promise<void> } | undefined>(undefined);

function appearance() {
    const [theme, setTheme] = useState("light");

    const changeTheme = async (newTheme: any) => {
        setTheme(newTheme);
        await AsyncStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <SafeAreaProvider>
                <SafeAreaView className="flex-1">
                    <View>
                        <Text className='text-xl ml-4'>Cards color</Text>
                        <TouchableOpacity onPress={() => alert('Color picker coming soon!')}>
                            <View className='w-10 h-10 bg-black m-5 rounded-2xl'></View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </ThemeContext.Provider>
    )
}

export default appearance;
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeContext.Provider');
    }
    return context;
};