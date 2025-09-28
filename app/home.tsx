import React from 'react'
import { View, Image, Button, Alert, TouchableOpacity, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function home() {
  return (
    <SafeAreaProvider>
          <SafeAreaView className="flex-1">
      
                <View className="mt-8 ml-5 h-[50] flex-row items-center justify-between pr-5">
                  <Text className="text-black font-bold text-3xl">Good Morning, Clay</Text>
                  <Image className="w-10 h-10" source={require('@/assets/images/fawn.gif')}/>
                </View>
                <View className='mt-5 h-[1] bg-black'></View>
                <Text className='text-3xl ml-5 mt-5'>Notes</Text>
                <View>
                  
                </View>
          </SafeAreaView>
        </SafeAreaProvider>
  )
}

export default home