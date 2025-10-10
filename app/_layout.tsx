import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  // FIX: Explicitly define the type for the state variable
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);
  
  const [fontsLoaded] = useFonts({
    'AlanSans-Black': require('../assets/fonts/AlanSans-Black.ttf'),
    'AlanSans-Bold': require('../assets/fonts/AlanSans-Bold.ttf'),
    'AlanSans-ExtraBold': require('../assets/fonts/AlanSans-ExtraBold.ttf'),
    'AlanSans-Light': require('../assets/fonts/AlanSans-Light.ttf'),
    'AlanSans-Medium': require('../assets/fonts/AlanSans-Medium.ttf'),
    'AlanSans-Regular': require('../assets/fonts/AlanSans-Regular.ttf'),
    'AlanSans-SemiBold': require('../assets/fonts/AlanSans-SemiBold.ttf'),
  });

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const value = await AsyncStorage.getItem("firstTime");
   
        setIsFirstTime(value === null); 
      } catch (error) {
        console.error("Error reading from AsyncStorage", error);
      
        setIsFirstTime(true);
      }
    };
    checkFirstTime();
  }, []);

  if (!fontsLoaded || isFirstTime === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isFirstTime ? (
        <Stack.Screen name="welcome" />
      ) : (
        <Stack.Screen name="(tabs)" /> 
      )}
    </Stack>
  );
}