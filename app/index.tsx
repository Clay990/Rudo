import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./global.css"
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { View, Image, Button, Alert, TouchableOpacity } from "react-native";

export default function App() {
  const handlestart = () => {
    Alert.alert("Hello");
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
          <Heading size='3xl'>Take Notes in this</Heading>
          <Heading className="pt-4" size='3xl'>New modern Rudo app</Heading>
          <Text className="pt-5" size='lg'>Do your note taking anywhere anytime</Text>
            
          <TouchableOpacity onPress={handlestart}>
            <View className="overflow-hidden mt-10 rounded-xl bg-pink-400 justify-center items-center h-[50]">
              <Text className="text-white font-bold text-xl">Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}