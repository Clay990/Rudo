
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [firstTime, setFirstTime] = useState(false);
  const [loading, setLoading] = useState(true);
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

      const value = await AsyncStorage.getItem("isFirstTime");
      setFirstTime(!value);
      setLoading(false);
    };
    checkFirstTime();
  }, []);
  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;


  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {firstTime ? (
        <Stack.Screen name="welcome" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
      <Stack.Screen name="note" />
    </Stack>
  );
}
