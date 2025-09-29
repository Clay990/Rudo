
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'AlanSans-Black': require('../assets/fonts/AlanSans-Black.ttf'),
    'AlanSans-Bold': require('../assets/fonts/AlanSans-Bold.ttf'),
    'AlanSans-ExtraBold': require('../assets/fonts/AlanSans-ExtraBold.ttf'),
    'AlanSans-Light': require('../assets/fonts/AlanSans-Light.ttf'),
    'AlanSans-Medium': require('../assets/fonts/AlanSans-Medium.ttf'),
    'AlanSans-Regular': require('../assets/fonts/AlanSans-Regular.ttf'),
    'AlanSans-SemiBold': require('../assets/fonts/AlanSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
