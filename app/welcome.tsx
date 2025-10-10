import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./global.css"
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Welcome() {
  const router = useRouter();
  const handleContinue = async () => {
    await AsyncStorage.setItem("firstTime", "false");
    router.replace("/(tabs)/home");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <Image
            style={{ width: '100%', height: '100%', borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
            source={require('@/assets/images/welcome.png')}
            alt="image"
          />
        </View >
        <View className="flex-1 flex-col justify-center m-5">
          <Text className="font-alan-sans-bold text-4xl ">Take Notes in this</Text>
          <Text className="pt-4 font-alan-sans-bold text-4xl " >New modern Rudo app</Text>
          <Text className="pt-5 font-alan-sans-regular">Do your note taking anywhere anytime</Text>

          <TouchableOpacity onPress={handleContinue}>
            <View className="overflow-hidden mt-10 rounded-xl bg-pink-400 justify-center items-center h-[50]">
              <Text className="text-white font-bold text-xl">Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}